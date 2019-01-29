module.exports = {
    "extends": ["tslint:recommended", "tslint-config-standard"],
    "rules": {
        "arrow-parens": false,
        "no-shadowed-variable": false,
        "no-conditional-assignment": false,
        "interface-name": false,
        "ter-indent": [true, 4, { SwitchCase: 1 }],
        "max-line-length": [true, 140],
        "object-literal-sort-keys": false,
        "member-ordering": false
    }
}
