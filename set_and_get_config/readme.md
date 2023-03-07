## how to use

for EcmaScript:

    import { setcfg } from './cfg.mjs';
      /* Set config */
      setcfg({ recursive: true });
    import { getcfg } from './cfg.mjs';
      console.log( getcfg );

for Javascript:

    const { setcfg } from './cfg.js';
      /* Set config */
      setcfg({ recursive: true });
    const { getcfg } from './cfg.js';
      console.log( getcfg );
**footnote:** use getcfg after setting your config or config will not change.

***Note:***
if you don't know how to import mjs type files, you must use Javascript (*.js) version for Nodejs or you can check out "nodejs_enabling_es_modules" from this repository.
