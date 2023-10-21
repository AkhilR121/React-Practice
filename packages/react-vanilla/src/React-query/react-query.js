"use strict";
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
exports.__esModule = true;
exports.RQuery = void 0;
var react_query_1 = require("@tanstack/react-query");
var POSTS = [
    { id: 1, title: "post 1" },
    { id: 2, title: "post 2" },
];
function RQuery() {
    var postsQuery = (0, react_query_1.useQuery)({
        queryKey: ["posts"],
        queryFn: function () {
            return wait(1000).then(function () {
                return __spreadArray([], POSTS, true);
            });
        }
    });
    if (postsQuery.isLoading)
        return <h1>Loading...</h1>;
    if (postsQuery.isError)
        return <pre>{JSON.stringify(postsQuery.error)}</pre>;
    return (<>
      {postsQuery.data.map(function (post) { return (<div key={post.id}>{post.title}</div>); })}
    </>);
}
exports.RQuery = RQuery;
function wait(duration) {
    return new Promise(function (resolve) { return setTimeout(resolve, duration); });
}
