/root/Targets/hitagi.js
└─┬ hitagi.js@1.1.4 
  ├── howler@1.1.29 
  ├── lodash@3.10.1 
  └─┬ pixi.js@3.0.11 
    ├── async@1.5.2 
    ├─┬ brfs@1.4.3 
    │ ├─┬ quote-stream@1.0.2 
    │ │ ├── buffer-equal@0.0.1 
    │ │ └── minimist@1.2.0 
    │ ├─┬ resolve@1.4.0 
    │ │ └── path-parse@1.0.5 
    │ ├─┬ static-module@1.5.0 
    │ │ ├─┬ concat-stream@1.6.0 
    │ │ │ ├── inherits@2.0.3 
    │ │ │ └── typedarray@0.0.6 
    │ │ ├─┬ duplexer2@0.0.2 
    │ │ │ └─┬ readable-stream@1.1.14 
    │ │ │   ├── isarray@0.0.1 
    │ │ │   └── string_decoder@0.10.31 
    │ │ ├─┬ escodegen@1.3.3 
    │ │ │ ├── esprima@1.1.1 
    │ │ │ ├── estraverse@1.5.1 
    │ │ │ ├── esutils@1.0.0 
    │ │ │ └─┬ source-map@0.1.43 
    │ │ │   └── amdefine@1.0.1 
    │ │ ├─┬ falafel@2.1.0 
    │ │ │ ├── acorn@5.1.2 
    │ │ │ ├── foreach@2.0.5 
    │ │ │ ├── isarray@0.0.1 
    │ │ │ └── object-keys@1.0.11 
    │ │ ├─┬ has@1.0.1 
    │ │ │ └── function-bind@1.1.1 
    │ │ ├── object-inspect@0.4.0 
    │ │ ├─┬ quote-stream@0.0.0 
    │ │ │ └── minimist@0.0.8 
    │ │ ├─┬ readable-stream@1.0.34 
    │ │ │ ├── core-util-is@1.0.2 
    │ │ │ ├── isarray@0.0.1 
    │ │ │ └── string_decoder@0.10.31 
    │ │ ├── shallow-copy@0.0.1 
    │ │ ├─┬ static-eval@0.2.4 
    │ │ │ └─┬ escodegen@0.0.28 
    │ │ │   ├── esprima@1.0.4 
    │ │ │   └── estraverse@1.3.2 
    │ │ └─┬ through2@0.4.2 
    │ │   └─┬ xtend@2.1.2 
    │ │     └── object-keys@0.4.0 
    │ └─┬ through2@2.0.3 
    │   ├─┬ readable-stream@2.3.3 
    │   │ ├── isarray@1.0.0 
    │   │ ├── process-nextick-args@1.0.7 
    │   │ ├── safe-buffer@5.1.1 
    │   │ ├── string_decoder@1.0.3 
    │   │ └── util-deprecate@1.0.2 
    │   └── xtend@4.0.1 
    ├─┬ browserify-versionify@1.0.6 
    │ ├── find-root@0.1.2 
    │ └─┬ through2@0.6.3 
    │   └─┬ readable-stream@1.0.34 
    │     ├── isarray@0.0.1 
    │     └── string_decoder@0.10.31 
    ├── earcut@2.1.1 
    ├── eventemitter3@1.2.0 
    ├── object-assign@4.1.1 
    └─┬ resource-loader@1.8.0 
      ├── eventemitter3@2.0.3 
      └── parse-uri@1.0.0 

Setup Done exists, not setting up
:../FeatureTester/libs/:/root/Targets/hitagi.js/node_modules
Set Default Z3_PATH to ./node_modules/z3javascript/bin/libz3.so
ExpoSE Master: /root/ExpoSE/lib/Harness/src/harness.js max concurrent: 16 max paths: 1000000
Setting timeout to 900000

*-- Stat Module Output --*
*-- concretizations: ["defineProperty","bound log","call","RegExp","WeakMap","max","Array","now","defineProperties","create","join"]
*-- Stat Module Done --*
*-- Test Case {"_bound":0} start 0.0588 took 49.2239s
*-- Errors occured in test {"_bound":0}
* Error: ReferenceError: document is not defined
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"_bound":0}'
*-- Coverage Data
*- File /root/ExpoSE/lib/Harness/src/harness.js. Coverage (Term): 18% Coverage (LOC): 24%
*- File /root/ExpoSE/lib/S$/bin/symbols.js. Coverage (Term): 16% Coverage (LOC): 34%
*- File /root/Targets/hitagi.js/node_modules/hitagi.js/src/main.js. Coverage (Term): 80% Coverage (LOC): 83%
*- File /root/Targets/hitagi.js/node_modules/hitagi.js/src/entity.js. Coverage (Term): 13% Coverage (LOC): 13%
*- File /root/Targets/hitagi.js/node_modules/lodash/index.js. Coverage (Term): 20% Coverage (LOC): 31%
*- File /root/Targets/hitagi.js/node_modules/hitagi.js/src/world.js. Coverage (Term): 5% Coverage (LOC): 5%
*- File /root/Targets/hitagi.js/node_modules/hitagi.js/src/utils.js. Coverage (Term): 22% Coverage (LOC): 33%
*- File /root/Targets/hitagi.js/node_modules/hitagi.js/src/components/collision.js. Coverage (Term): 46% Coverage (LOC): 41%
*- File /root/Targets/hitagi.js/node_modules/hitagi.js/src/components/position.js. Coverage (Term): 54% Coverage (LOC): 60%
*- File /root/Targets/hitagi.js/node_modules/hitagi.js/src/components/velocity.js. Coverage (Term): 53% Coverage (LOC): 60%
*- File /root/Targets/hitagi.js/node_modules/hitagi.js/src/components/graphics/circle.js. Coverage (Term): 53% Coverage (LOC): 60%
*- File /root/Targets/hitagi.js/node_modules/hitagi.js/src/components/graphics/ellipse.js. Coverage (Term): 48% Coverage (LOC): 55%
*- File /root/Targets/hitagi.js/node_modules/hitagi.js/src/components/graphics/graphic.js. Coverage (Term): 29% Coverage (LOC): 19%
*- File /root/Targets/hitagi.js/node_modules/hitagi.js/src/components/graphics/line.js. Coverage (Term): 42% Coverage (LOC): 47%
*- File /root/Targets/hitagi.js/node_modules/hitagi.js/src/components/graphics/polygon.js. Coverage (Term): 53% Coverage (LOC): 60%
*- File /root/Targets/hitagi.js/node_modules/hitagi.js/src/components/graphics/rectangle.js. Coverage (Term): 48% Coverage (LOC): 55%
*- File /root/Targets/hitagi.js/node_modules/hitagi.js/src/components/graphics/staticSprite.js. Coverage (Term): 51% Coverage (LOC): 58%
*- File /root/Targets/hitagi.js/node_modules/hitagi.js/src/components/graphics/sprite.js. Coverage (Term): 40% Coverage (LOC): 35%
*- File /root/Targets/hitagi.js/node_modules/hitagi.js/src/components/graphics/text.js. Coverage (Term): 38% Coverage (LOC): 32%
*- File /root/Targets/hitagi.js/node_modules/hitagi.js/src/prefabs/base.js. Coverage (Term): 64% Coverage (LOC): 64%
*- File /root/Targets/hitagi.js/node_modules/hitagi.js/src/prefabs/static.js. Coverage (Term): 64% Coverage (LOC): 67%
*- File /root/Targets/hitagi.js/node_modules/hitagi.js/src/prefabs/body.js. Coverage (Term): 71% Coverage (LOC): 89%
*- File /root/Targets/hitagi.js/node_modules/hitagi.js/src/prefabs/staticBody.js. Coverage (Term): 71% Coverage (LOC): 89%
*- File /root/Targets/hitagi.js/node_modules/hitagi.js/src/systems/collisionSystem.js. Coverage (Term): 7% Coverage (LOC): 9%
*- File /root/Targets/hitagi.js/node_modules/hitagi.js/src/systems/controlsSystem.js. Coverage (Term): 8% Coverage (LOC): 7%
*- File /root/Targets/hitagi.js/node_modules/hitagi.js/src/systems/pixiRenderSystem.js. Coverage (Term): 3% Coverage (LOC): 3%
*- File /root/Targets/hitagi.js/node_modules/pixi.js/src/index.js. Coverage (Term): 26% Coverage (LOC): 38%
*- File /root/Targets/hitagi.js/node_modules/pixi.js/src/polyfill/index.js. Coverage (Term): 96% Coverage (LOC): 100%
*- File /root/Targets/hitagi.js/node_modules/pixi.js/src/polyfill/Object.assign.js. Coverage (Term): 72% Coverage (LOC): 80%
*- File /root/Targets/hitagi.js/node_modules/pixi.js/src/polyfill/requestAnimationFrame.js. Coverage (Term): 55% Coverage (LOC): 64%
*- File /root/Targets/hitagi.js/node_modules/pixi.js/src/polyfill/Math.sign.js. Coverage (Term): 33% Coverage (LOC): 36%
*- File /root/Targets/hitagi.js/node_modules/pixi.js/src/core/index.js. Coverage (Term): 29% Coverage (LOC): 30%
*- File /root/Targets/hitagi.js/node_modules/pixi.js/src/core/const.js. Coverage (Term): 99% Coverage (LOC): 100%
*- File /root/Targets/hitagi.js/node_modules/pixi.js/src/core/math/index.js. Coverage (Term): 98% Coverage (LOC): 100%
*- File /root/Targets/hitagi.js/node_modules/pixi.js/src/core/math/Point.js. Coverage (Term): 47% Coverage (LOC): 75%
*- File /root/Targets/hitagi.js/node_modules/pixi.js/src/core/math/Matrix.js. Coverage (Term): 14% Coverage (LOC): 27%
*- File /root/Targets/hitagi.js/node_modules/pixi.js/src/core/math/GroupD8.js. Coverage (Term): 62% Coverage (LOC): 77%
*- File /root/Targets/hitagi.js/node_modules/pixi.js/src/core/math/shapes/Circle.js. Coverage (Term): 29% Coverage (LOC): 48%
*- File /root/Targets/hitagi.js/node_modules/pixi.js/src/core/math/shapes/Rectangle.js. Coverage (Term): 54% Coverage (LOC): 62%
*- File /root/Targets/hitagi.js/node_modules/pixi.js/src/core/math/shapes/Ellipse.js. Coverage (Term): 28% Coverage (LOC): 46%
*- File /root/Targets/hitagi.js/node_modules/pixi.js/src/core/math/shapes/Polygon.js. Coverage (Term): 17% Coverage (LOC): 27%
*- File /root/Targets/hitagi.js/node_modules/pixi.js/src/core/math/shapes/RoundedRectangle.js. Coverage (Term): 25% Coverage (LOC): 38%
*- File /root/Targets/hitagi.js/node_modules/pixi.js/src/core/utils/index.js. Coverage (Term): 13% Coverage (LOC): 27%
*- File /root/Targets/hitagi.js/node_modules/eventemitter3/index.js. Coverage (Term): 19% Coverage (LOC): 26%
*- File /root/Targets/hitagi.js/node_modules/pixi.js/src/core/utils/pluginTarget.js. Coverage (Term): 51% Coverage (LOC): 63%
*- File /root/Targets/hitagi.js/node_modules/async/lib/async.js. Coverage (Term): 12% Coverage (LOC): 18%
*- File /root/Targets/hitagi.js/node_modules/pixi.js/src/core/ticker/index.js. Coverage (Term): 97% Coverage (LOC): 100%
*- File /root/Targets/hitagi.js/node_modules/pixi.js/src/core/ticker/Ticker.js. Coverage (Term): 30% Coverage (LOC): 45%
*- File /root/Targets/hitagi.js/node_modules/pixi.js/src/core/display/DisplayObject.js. Coverage (Term): 13% Coverage (LOC): 27%
*- File /root/Targets/hitagi.js/node_modules/pixi.js/src/core/textures/RenderTexture.js. Coverage (Term): 12% Coverage (LOC): 15%
*- File /root/Targets/hitagi.js/node_modules/pixi.js/src/core/textures/BaseTexture.js. Coverage (Term): 27% Coverage (LOC): 30%
*- File /root/Targets/hitagi.js/node_modules/pixi.js/src/core/textures/Texture.js. Coverage (Term): 32% Coverage (LOC): 45%
*- File /root/Targets/hitagi.js/node_modules/pixi.js/src/core/textures/VideoBaseTexture.js. Coverage (Term): 17% Coverage (LOC): 25%
*- File /root/Targets/hitagi.js/node_modules/pixi.js/src/core/textures/TextureUvs.js. Coverage (Term): 9% Coverage (LOC): 16%
*- File /root/Targets/hitagi.js/node_modules/pixi.js/src/core/renderers/webgl/utils/RenderTarget.js. Coverage (Term): 11% Coverage (LOC): 16%
*- File /root/Targets/hitagi.js/node_modules/pixi.js/src/core/renderers/webgl/utils/StencilMaskStack.js. Coverage (Term): 59% Coverage (LOC): 63%
*- File /root/Targets/hitagi.js/node_modules/pixi.js/src/core/renderers/webgl/managers/FilterManager.js. Coverage (Term): 10% Coverage (LOC): 16%
*- File /root/Targets/hitagi.js/node_modules/pixi.js/src/core/renderers/webgl/managers/WebGLManager.js. Coverage (Term): 46% Coverage (LOC): 69%
*- File /root/Targets/hitagi.js/node_modules/pixi.js/src/core/renderers/webgl/utils/Quad.js. Coverage (Term): 10% Coverage (LOC): 12%
*- File /root/Targets/hitagi.js/node_modules/pixi.js/src/core/renderers/canvas/utils/CanvasBuffer.js. Coverage (Term): 29% Coverage (LOC): 58%
*- File /root/Targets/hitagi.js/node_modules/pixi.js/src/core/display/Container.js. Coverage (Term): 13% Coverage (LOC): 21%
*- File /root/Targets/hitagi.js/node_modules/pixi.js/src/core/sprites/Sprite.js. Coverage (Term): 10% Coverage (LOC): 17%
*- File /root/Targets/hitagi.js/node_modules/pixi.js/src/core/renderers/canvas/utils/CanvasTinter.js. Coverage (Term): 11% Coverage (LOC): 21%
*- File /root/Targets/hitagi.js/node_modules/pixi.js/src/core/particles/ParticleContainer.js. Coverage (Term): 11% Coverage (LOC): 16%
*- File /root/Targets/hitagi.js/node_modules/pixi.js/src/core/sprites/webgl/SpriteRenderer.js. Coverage (Term): 6% Coverage (LOC): 11%
*- File /root/Targets/hitagi.js/node_modules/pixi.js/src/core/renderers/webgl/utils/ObjectRenderer.js. Coverage (Term): 64% Coverage (LOC): 88%
*- File /root/Targets/hitagi.js/node_modules/pixi.js/src/core/renderers/webgl/WebGLRenderer.js. Coverage (Term): 11% Coverage (LOC): 12%
*- File /root/Targets/hitagi.js/node_modules/pixi.js/src/core/renderers/SystemRenderer.js. Coverage (Term): 19% Coverage (LOC): 20%
*- File /root/Targets/hitagi.js/node_modules/pixi.js/src/core/renderers/webgl/managers/ShaderManager.js. Coverage (Term): 23% Coverage (LOC): 24%
*- File /root/Targets/hitagi.js/node_modules/pixi.js/src/core/renderers/webgl/shaders/TextureShader.js. Coverage (Term): 44% Coverage (LOC): 47%
*- File /root/Targets/hitagi.js/node_modules/pixi.js/src/core/renderers/webgl/shaders/Shader.js. Coverage (Term): 6% Coverage (LOC): 11%
*- File /root/Targets/hitagi.js/node_modules/pixi.js/src/core/renderers/webgl/shaders/ComplexPrimitiveShader.js. Coverage (Term): 37% Coverage (LOC): 15%
*- File /root/Targets/hitagi.js/node_modules/pixi.js/src/core/renderers/webgl/shaders/PrimitiveShader.js. Coverage (Term): 39% Coverage (LOC): 15%
*- File /root/Targets/hitagi.js/node_modules/pixi.js/src/core/renderers/webgl/managers/MaskManager.js. Coverage (Term): 33% Coverage (LOC): 45%
*- File /root/Targets/hitagi.js/node_modules/pixi.js/src/core/renderers/webgl/filters/SpriteMaskFilter.js. Coverage (Term): 30% Coverage (LOC): 42%
*- File /root/Targets/hitagi.js/node_modules/pixi.js/src/core/renderers/webgl/filters/AbstractFilter.js. Coverage (Term): 25% Coverage (LOC): 41%
*- File /root/Targets/hitagi.js/node_modules/pixi.js/src/core/renderers/webgl/managers/StencilManager.js. Coverage (Term): 7% Coverage (LOC): 14%
*- File /root/Targets/hitagi.js/node_modules/pixi.js/src/core/renderers/webgl/managers/BlendModeManager.js. Coverage (Term): 43% Coverage (LOC): 50%
*- File /root/Targets/hitagi.js/node_modules/pixi.js/src/core/renderers/webgl/filters/FXAAFilter.js. Coverage (Term): 47% Coverage (LOC): 50%
*- File /root/Targets/hitagi.js/node_modules/pixi.js/src/core/particles/webgl/ParticleRenderer.js. Coverage (Term): 8% Coverage (LOC): 13%
*- File /root/Targets/hitagi.js/node_modules/pixi.js/src/core/particles/webgl/ParticleShader.js. Coverage (Term): 41% Coverage (LOC): 16%
*- File /root/Targets/hitagi.js/node_modules/pixi.js/src/core/particles/webgl/ParticleBuffer.js. Coverage (Term): 8% Coverage (LOC): 16%
*- File /root/Targets/hitagi.js/node_modules/pixi.js/src/core/text/Text.js. Coverage (Term): 4% Coverage (LOC): 3%
*- Re-run with EXPOSE_PRINT_COVERAGE=1 to print line by line coverage information
** ExpoSE Finished. 1 paths with 1 errors **