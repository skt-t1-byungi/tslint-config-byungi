module.exports = {
  "extends": ["tslint:recommended", "tslint-config-standard"],
  "rules": {
    "arrow-parens": false,
    "no-shadowed-variable": false,
    "no-conditional-assignment": false,
    "interface-name": false,
    "ter-indent": [true, 4, { SwitchCase: 1 }],
  }
}