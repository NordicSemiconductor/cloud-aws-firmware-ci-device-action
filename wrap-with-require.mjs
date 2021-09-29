// Some dependencies use require(), so give it to them.
import { createRequire } from 'module'
global.require = createRequire(import.meta.url)
import('./build/run.js')
