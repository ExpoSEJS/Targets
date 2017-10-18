/root/Targets/lz4.jsx
└── lz4.jsx@0.1.1 

Setup Done exists, not setting up
:../FeatureTester/libs/:/root/Targets/lz4.jsx/node_modules
Set Default Z3_PATH to ./node_modules/z3javascript/bin/libz3.so
ExpoSE Master: /root/ExpoSE/lib/Harness/src/harness.js max concurrent: 16 max paths: 1000000
Setting timeout to 900000

*-- Stat Module Output --*
*-- concretizations: ["defineProperty","bound log"]
*-- Stat Module Done --*
*-- Test Case {"_bound":0} start 0.0233 took 3.7094s
*-- Errors occured in test {"_bound":0}
* Error: Tropigate failed because SyntaxError: Unexpected token (7:8) on program import "lz4_static.jsx";
import "lz4_utils.jsx";
import "xxhash.jsx";
import "console.jsx";

class Lz4Descriptor {
    var blockIndependence : boolean;
    var blockChecksum : boolean;
    var blockMaxSize : int;
    var streamSize : boolean;
    var streamChecksum : boolean;
    var dict : boolean;
    var dictId : int;
}

class Lz4Decoder {
    var _buffer : Uint8Array;
    var _pos : int;
    var _descriptor : Lz4Descriptor;
    var _state : int;
    var _notEnoughData : boolean;
    var _descriptorStart : int;
    var _streamSize : number[]; // 64bit number => 32bit number 2 elements array
    var _dictId : variant;
    var _currentStreamChecksum : ArrayBufferXXH;
    var _dataBlock : Uint8Array;
    var _uncompressed : ArrayBuffer;
    var _dataBlockSize : int;
    var _skippableSize : int;

    function constructor() {
        this._buffer = null;
        this._pos = 0;
        this._descriptor = null;
        this._state = Lz4Static.STATES.MAGIC;
        this._notEnoughData = false;
        this._descriptorStart = 0; 
        this._streamSize = null;
        this._dictId = null;
        this._currentStreamChecksum = null;
        this._dataBlockSize = 0;
        this._skippableSize = 0;
    }

    function decode(data : ArrayBuffer) : ArrayBuffer {
        /*if (this._skippableSize > 0) {
            this._skippableSize -= data.length;
            if (this._skippableSize > 0) {
                return;
            }
        }*/
        this._buffer = new Uint8Array(data);
        this._main();
        return this._uncompressed;
    }

    function _emit_Error(msg : string) : void {
        throw new Error(msg + ' @' + this._pos as string);
    }

    function _check_Size(n : int) : boolean {
        var delta = this._buffer.length - this._pos;
        if (delta <= 0 || delta < n) {
            if (this._notEnoughData) {
                this._emit_Error('Unexpected end of LZ4 stream');
            }
            return true;
        }

        this._pos += n;
        return false;
    }

    function _main() : void {
        var pos = this._pos;
        var notEnoughData = false;

        while ( !notEnoughData && this._pos < this._buffer.length ) {
            if (this._state == Lz4Static.STATES.MAGIC) {
                notEnoughData = this._read_MagicNumber();
            }

            if (this._state == Lz4Static.STATES.SKIP_SIZE) {
                notEnoughData = this._read_SkippableSize();
            }

            if (this._state == Lz4Static.STATES.DESCRIPTOR) {
                notEnoughData = this._read_Descriptor();
            }

            if (this._state == Lz4Static.STATES.SIZE) {
                notEnoughData = this._read_Size();
            }

            if (this._state == Lz4Static.STATES.DICTID) {
                notEnoughData = this._read_DictId();
            }

            if (this._state == Lz4Static.STATES.DESCRIPTOR_CHECKSUM) {
                notEnoughData = this._read_DescriptorChecksum();
            }

            if (this._state == Lz4Static.STATES.DATABLOCK_SIZE) {
                notEnoughData = this._read_DataBlockSize();
            }

            if (this._state == Lz4Static.STATES.DATABLOCK_DATA) {
                notEnoughData = this._read_DataBlockData();
            }

            if (this._state == Lz4Static.STATES.DATABLOCK_CHECKSUM) {
                notEnoughData = this._read_DataBlockChecksum();
            }

            if (this._state == Lz4Static.STATES.DATABLOCK_UNCOMPRESS) {
                notEnoughData = this._uncompress_DataBlock();
            }

            if (this._state == Lz4Static.STATES.EOS) {
                notEnoughData = this._read_EOS();
            }
        }

        if (this._pos > pos) {
            this._buffer = this._buffer.subarray(this._pos, this._buffer.length);
            this._pos = 0;
        }
    }

    function _read_MagicNumber() : boolean {
        var pos = this._pos;
        if (this._check_Size(Lz4Static.SIZES.MAGIC)) {
            return true;
        }

        var magic = Lz4Util.readInt32LE(this._buffer, pos);

        // Skippable chunk
        if ((magic & 0xFFFFFFF0) == Lz4Static.MAGICNUMBER_SKIPPABLE) {
            this._state = Lz4Static.STATES.SKIP_SIZE;
            return false;
        }

        // LZ4 stream
        if (magic != Lz4Static.MAGICNUMBER) {
            this._pos = pos;
            this._emit_Error('Invalid magic number: ' + magic.toString(16).toUpperCase());
            return true;
        }
        this._state = Lz4Static.STATES.DESCRIPTOR;
        return false;
    }

    function _read_SkippableSize() : boolean {
        var pos = this._pos;
        if (this._check_Size(Lz4Static.SIZES.SKIP_SIZE)) {
            return true;
        }
        this._state = Lz4Static.STATES.SKIP_DATA;
        this._skippableSize = Lz4Util.readInt32LE(this._buffer, pos);
        return false;
    }

    function _read_Descriptor() : boolean {
        // Flags
        var pos = this._pos;
        if (this._check_Size(Lz4Static.SIZES.DESCRIPTOR)) {
            return true;
        }

        this._descriptorStart = pos;

        // version
        var descriptor_flg = this._buffer[pos];
        var version = descriptor_flg >> 6;
        if (version != Lz4Static.VERSION) {
            this._pos = pos;
            this._emit_Error('Invalid version: ' + version + ' != ' + Lz4Static.VERSION);
            return true;
        }

        // flags
        // reserved bit should not be set
        if ( (descriptor_flg >> 1) & 0x1 ) {
            this._pos = pos;
            this._emit_Error('Reserved bit set');
            return true;
        }

        var blockMaxSizeIndex = (this._buffer[pos+1] >> 4) & 0x7;
        var blockMaxSize = Lz4Static.blockMaxSizes[blockMaxSizeIndex];
        if (blockMaxSize == null) {
            this._pos = pos;
            this._emit_Error('Invalid block max size: ' + blockMaxSizeIndex);
            return true;
        }

        this._descriptor = new Lz4Descriptor();
        this._descriptor.blockIndependence = ((descriptor_flg >> 5) & 0x1) as boolean;
        this._descriptor.blockChecksum = ((descriptor_flg >> 4) & 0x1) as boolean;
        this._descriptor.blockMaxSize = blockMaxSize;
        this._descriptor.streamSize = ((descriptor_flg >> 3) & 0x1) as boolean;
        this._descriptor.streamChecksum = ((descriptor_flg >> 2) & 0x1) as boolean;
        this._descriptor.dict = (descriptor_flg & 0x1) as boolean;
        this._descriptor.dictId = 0;

        this._state = Lz4Static.STATES.SIZE;
        return false;
    }

    function _read_Size() : boolean {
        if (this._descriptor.streamSize) {
            var pos = this._pos;
            if (this._check_Size(Lz4Static.SIZES.SIZE)) {
                return true;
            }
            //TODO max size is unsigned 64 bits
            this._streamSize = [Lz4Util.readInt32LE(this._buffer, pos), Lz4Util.readInt32LE(this._buffer, pos + 4)];
        }

        this._state = Lz4Static.STATES.DICTID;
        return false;
    }

    function _read_DictId() : boolean {
        if (this._descriptor.dictId) {
            var pos = this._pos;
            if (this._check_Size(Lz4Static.SIZES.DICTID)) {
                return true;
            }
            this._dictId = Lz4Util.readInt32LE(this._buffer, pos);
        }

        this._state = Lz4Static.STATES.DESCRIPTOR_CHECKSUM;
        return false;
    }

    function _read_DescriptorChecksum() : boolean {
        var pos = this._pos;
        if (this._check_Size(Lz4Static.SIZES.DESCRIPTOR_CHECKSUM)) {
            return true;
        }

        var checksum = this._buffer[pos];
        var currentChecksum = Lz4Util.descriptorChecksum(this._buffer.subarray(this._descriptorStart, pos));
        if (currentChecksum != checksum) {
            this._pos = pos;
            this._emit_Error('Invalid stream descriptor checksum');
            return true;
        }

        this._state = Lz4Static.STATES.DATABLOCK_SIZE;
        return false;
    }

    function _read_DataBlockSize() : boolean {
        var pos = this._pos;
        if (this._check_Size(Lz4Static.SIZES.DATABLOCK_SIZE)) {
            return true;
        }
        var datablock_size = Lz4Util.readInt32LE(this._buffer, pos);
        // Uncompressed
        if (datablock_size == Lz4Static.EOS) {
            this._state = Lz4Static.STATES.EOS;
            return false;
        }

    // if (datablock_size > this._descriptor.blockMaxSize) {
    // 	this._emit_Error( 'ASSERTION: invalid datablock_size: ' + datablock_size.toString(16).toUpperCase() + ' > ' + this._descriptor.blockMaxSize.toString(16).toUpperCase() )
    // }
        this._dataBlockSize = datablock_size;
        this._state = Lz4Static.STATES.DATABLOCK_DATA;
        return false;
    }

    function _read_DataBlockData() : boolean {
        var pos = this._pos;
        var datablock_size = this._dataBlockSize;
        if (datablock_size & 0x80000000) {
            // Uncompressed size
            datablock_size = datablock_size & 0x7FFFFFFF;
        }
        if (this._check_Size(datablock_size)) {
            return true;
        }
        this._dataBlock = this._buffer.subarray(pos, pos + datablock_size);
        this._state = Lz4Static.STATES.DATABLOCK_CHECKSUM;
        return false;
    }

    function _read_DataBlockChecksum() : boolean {
        var pos = this._pos;
        if (this._descriptor.blockChecksum) {
            if (this._check_Size(Lz4Static.SIZES.DATABLOCK_CHECKSUM)) {
                return true;
            }
            var checksum = Lz4Util.readInt32LE(this._buffer, this._pos-4);
            var currentChecksum = Lz4Util.blockChecksum(this._dataBlock);
            if (currentChecksum != checksum) {
                this._pos = pos;
                this._emit_Error('Invalid block checksum');
                return true;
            }
        }

        this._state = Lz4Static.STATES.DATABLOCK_UNCOMPRESS;
        return false;
    }

    function _uncompress_DataBlock() : boolean {
        var uncompressed : ArrayBuffer;
        // uncompressed?
        if (this._dataBlockSize & 0x80000000) {
            uncompressed = this._dataBlock.buffer;
        } else {
            uncompressed = new ArrayBuffer(this._descriptor.blockMaxSize);
            var decodedSize = this._uncompress(this._dataBlock, uncompressed);
            if (decodedSize < 0) {
                this._emit_Error('Invalid data block: ' + (-decodedSize) as string);
                return true;
            }
            if (decodedSize < this._descriptor.blockMaxSize) {
                uncompressed = uncompressed.slice(0, decodedSize);
            }
        }
        this._dataBlock = null;
        this._uncompressed = uncompressed;

        // Stream checksum
        if (this._descriptor.streamChecksum) {
            this._currentStreamChecksum = Lz4Util.streamChecksum(uncompressed, this._currentStreamChecksum);
        }

        this._state = Lz4Static.STATES.DATABLOCK_SIZE;
        return false; 
    }

    function _read_EOS() : boolean {
        if (this._descriptor.streamChecksum) {
            var pos = this._pos;
            if (this._check_Size(Lz4Static.SIZES.EOS)) {
                return true;
            }
            var checksum = Lz4Util.readInt32LE(this._buffer, pos);
            if (checksum != Lz4Util.streamChecksum(this._currentStreamChecksum)) {
                this._pos = pos;
                this._emit_Error('Invalid stream checksum: ' + checksum.toString(16).toUpperCase());
                return true;
            }
        }

        this._state = Lz4Static.STATES.MAGIC;
        return false;
    }

    function _uncompress(input : Uint8Array, output : ArrayBuffer) : number {
        var sIdx = 0;
        var eIdx = (input.length - sIdx);
        var output8 = new Uint8Array(output);
        var output16 = new Uint16Array(output);
        var output32 = new Uint32Array(output);
        // Process each sequence in the incoming data
        for (var i = sIdx, n = eIdx, j = 0; i < n;) {
            var token = input[i++];

            // Literals
            var literals_length = (token >> 4);
            if (literals_length > 0) {
                // length of literals
                var l = literals_length + 240;
                while (l == 255) {
                    l = input[i++];
                    literals_length += l;
                }

                // Copy the literals
                var end = i + literals_length;
                while (i < end) {
                    output8[j++] = input[i++];
                }
                // End of buffer?
                if (i == n) {
                    return j;
                }
            }

            // Match copy
            // 2 bytes offset (little endian)
            var offset = input[i++] | (input[i++] << 8);

            // 0 is an invalid offset value
            if (offset == 0 || offset > j) {
                return -(i-2);
            }

            // length of match copy
            var match_length = (token & 0xf);
            var l = match_length + 240;
            while (l == 255) {
                l = input[i++];
                match_length += l;
            }

            // Copy the match
            this._memcpy(output8, output16, output32, j, j - offset, match_length + 4);
            j += match_length + 4;
        }

        return j;
    }

    /*
     * Copy memory block within same ArrayBuffer like ArrayBuffer.copyWithin()
     */
    function _memcpy(output8 : Uint8Array, output16 : Uint16Array, output32 : Uint32Array, dstIndex : int, srcIndex : int, length : int) : void {
        if ((dstIndex - srcIndex) < length) {
            Lz4Decoder._copyUint8(output8, dstIndex, srcIndex, length);
            return;
        }
        switch ((srcIndex % 4) * 4 + dstIndex % 4) {
        case 0: // 0 vs 0
            Lz4Decoder._copyUint32(output32, dstIndex >>> 2, srcIndex >>> 2, length >>> 2);
            switch (length % 4) {
            case 1:
                output8[dstIndex + length - 1] = output8[srcIndex + length - 1];
                break;
            case 2:
                output16[(dstIndex + length - 2) >>> 1] = output16[(srcIndex + length - 2) >>> 1];
                break;
            case 3:
                output16[(dstIndex + length - 2) >>> 1] = output16[(srcIndex + length - 2) >>> 1];
                output8[dstIndex + length - 1] = output8[srcIndex + length - 1];
                break;
            }
            break;
        case 1: // 0 vs 1
            Lz4Decoder._copyUint8(output8, dstIndex, srcIndex, length);
            break;
        case 2: // 0 vs 2
            Lz4Decoder._copyUint16(output16, dstIndex >>> 1, srcIndex >>> 1, length >>> 1);
            if (length % 2) {
                output8[dstIndex + length - 1] = output8[srcIndex + length - 1];
            }
            break;
        case 3: // 0 vs 3
            Lz4Decoder._copyUint8(output8, dstIndex, srcIndex, length);
            break;
        case 4: // 1 vs 0
            Lz4Decoder._copyUint8(output8, dstIndex, srcIndex, length);
            break;
        case 5: // 1 vs 1
            output8[dstIndex] = output8[srcIndex];
            output16[(dstIndex + 1) >>> 1] = output16[(srcIndex + 1) >>> 1];
            Lz4Decoder._copyUint32(output32, (3 + dstIndex) >>> 2, (3 + srcIndex) >>> 2, (length - 3) >>> 2);
            switch (length % 4) {
            case 0:
                output8[dstIndex + length - 1] = output8[srcIndex + length - 1];
                break;
            case 1:
                output16[(dstIndex + length - 2) >>> 1] = output16[(srcIndex + length - 2) >>> 1];
                break;
            case 2:
                output16[(dstIndex + length - 2) >>> 1] = output16[(srcIndex + length - 2) >>> 1];
                output8[dstIndex + length - 1] = output8[srcIndex + length - 1];
                break;
            }
            break;
        case 6: // 1 vs 2
            Lz4Decoder._copyUint8(output8, dstIndex, srcIndex, length);
            break;
        case 7: // 1 vs 3
            output8[dstIndex] = output8[srcIndex];
            Lz4Decoder._copyUint16(output16, (1 + dstIndex) >>> 1, (1 + srcIndex) >>> 1, (length - 1) >>> 1);
            if ((srcIndex + length) % 2) {
                output8[dstIndex + length - 1] = output8[srcIndex + length - 1];
            }
            break;
        case 8: // 2 vs 0
            Lz4Decoder._copyUint16(output16, dstIndex >>> 1, srcIndex >>> 1, length >>> 1);
            if (length % 2) {
                output8[dstIndex + length - 1] = output8[srcIndex + length - 1];
            }
            break;
        case 9: // 2 vs 1
            Lz4Decoder._copyUint8(output8, dstIndex, srcIndex, length);
            break;
        case 10: // 2 vs 2
            output16[dstIndex >>> 1] = output16[srcIndex >>> 1];
            Lz4Decoder._copyUint32(output32, (2 + dstIndex) >>> 2, (2 + srcIndex) >>> 2, (length - 2) >>> 2);
            switch (length % 4) {
            case 0:
                output16[(dstIndex + length - 2) >>> 1] = output16[(srcIndex + length - 2) >>> 1];
                break;
            case 1:
                output16[(dstIndex + length - 2) >>> 1] = output16[(srcIndex + length - 2) >>> 1];
                output8[dstIndex + length - 1] = output8[srcIndex + length - 1];
                break;
            case 3:
                output8[dstIndex + length - 1] = output8[srcIndex + length - 1];
                break;
            }
            break;
        case 11: // 2 vs 3
            Lz4Decoder._copyUint8(output8, dstIndex, srcIndex, length);
            break;
        case 12: // 3 vs 0
            Lz4Decoder._copyUint8(output8, dstIndex, srcIndex, length);
            break;
        case 13: // 3 vs 1
            output8[dstIndex] = output8[srcIndex];
            Lz4Decoder._copyUint16(output16, (1 + dstIndex) >>> 1, (1 + srcIndex) >>> 1, (length - 1) >>> 1);
            if ((srcIndex + length) % 2) {
                output8[dstIndex + length - 1] = output8[srcIndex + length - 1];
            }
            break;
        case 14: // 3 vs 2
            Lz4Decoder._copyUint8(output8, dstIndex, srcIndex, length);
            break;
        case 15: // 3 vs 3
            output8[dstIndex] = output8[srcIndex];
            Lz4Decoder._copyUint32(output32, (1 + dstIndex) >>> 2, (1 + srcIndex) >>> 2, (length - 1) >>> 2);
            switch (length % 4) {
            case 0:
                output16[(dstIndex + length - 2) >>> 1] = output16[(srcIndex + length - 2) >>> 1];
                output8[dstIndex + length - 1] = output8[srcIndex + length - 1];
                break;
            case 2:
                output8[dstIndex + length - 1] = output8[srcIndex + length - 1];
                break;
            case 3:
                output16[(dstIndex + length - 2) >>> 1] = output16[(srcIndex + length - 2) >>> 1];
                break;
            }
            break;
        }
    }

    static function _copyUint8(array : Uint8Array, dstIndex : int, srcIndex : int, length : int) : void {
        var endIndex = srcIndex + length;
        while (srcIndex < endIndex) {
            array[dstIndex++] = array[srcIndex++];
        }
    }

    static function _copyUint16(array : Uint16Array, dstIndex : int, srcIndex : int, length : int) : void {
        var endIndex = srcIndex + length;
        while (srcIndex < endIndex) {
            array[dstIndex++] = array[srcIndex++];
        }
    }

    static function _copyUint32(array : Uint32Array, dstIndex : int, srcIndex : int, length : int) : void {
        var endIndex = srcIndex + length;
        while (srcIndex < endIndex) {
            array[dstIndex++] = array[srcIndex++];
        }
    }
}
 at SyntaxError: Unexpected token (7:8)
    at Parser.pp$4.raise (/root/ExpoSE/lib/Tropigate/node_modules/acorn/dist/acorn.js:2221:15)
    at Parser.pp.unexpected (/root/ExpoSE/lib/Tropigate/node_modules/acorn/dist/acorn.js:603:10)
    at Parser.pp.expect (/root/ExpoSE/lib/Tropigate/node_modules/acorn/dist/acorn.js:597:28)
    at Parser.pp$3.parseMethod (/root/ExpoSE/lib/Tropigate/node_modules/acorn/dist/acorn.js:2071:10)
    at Parser.pp$1.parseClassMethod (/root/ExpoSE/lib/Tropigate/node_modules/acorn/dist/acorn.js:1137:25)
    at Parser.pp$1.parseClass (/root/ExpoSE/lib/Tropigate/node_modules/acorn/dist/acorn.js:1118:14)
    at Parser.pp$1.parseStatement (/root/ExpoSE/lib/Tropigate/node_modules/acorn/dist/acorn.js:697:19)
    at Parser.parseStatement (/root/ExpoSE/lib/Tropigate/bin/Statements.js:104:30)
    at Parser.pp$1.parseTopLevel (/root/ExpoSE/lib/Tropigate/node_modules/acorn/dist/acorn.js:638:25)
    at Parser.parse (/root/ExpoSE/lib/Tropigate/node_modules/acorn/dist/acorn.js:516:17)
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"_bound":0}'
*-- Coverage Data
*- File /root/ExpoSE/lib/Harness/src/harness.js. Coverage (Term): 18% Coverage (LOC): 24%
*- File /root/ExpoSE/lib/S$/bin/symbols.js. Coverage (Term): 16% Coverage (LOC): 34%
*- Re-run with EXPOSE_PRINT_COVERAGE=1 to print line by line coverage information
** ExpoSE Finished. 1 paths with 1 errors **