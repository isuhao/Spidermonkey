// Forward to the target if the trap is not defined

if (typeof Symbol === "function") {
    assertEq(Proxy({
        foo: 'bar'
    }, {}).foo, 'bar');

    assertEq(Proxy({
        foo: 'bar'
    }, {})['foo'], 'bar');

    var s = Symbol.for("moon");
    var obj = {};
    obj[s] = "dust";
    assertEq(Proxy(obj, {})[s], "dust");
}
