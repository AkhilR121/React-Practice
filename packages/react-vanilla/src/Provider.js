"use strict";
exports.__esModule = true;
exports.Provider = void 0;
var react_1 = require("react");
var react_error_boundary_1 = require("react-error-boundary");
var react_hot_toast_1 = require("react-hot-toast");
var swr_1 = require("swr");
var ErrorFallback = function (_a) {
    var error = _a.error;
    return (<h1 className="text-3xl text-red-700">{error.message}</h1>);
};
var SuspenseFallback = <h1 className="text-3xl">Loading...</h1>;
var Provider = function (_a) {
    var children = _a.children;
    return (<react_error_boundary_1.ErrorBoundary FallbackComponent={ErrorFallback}>
    <react_1.Suspense fallback={SuspenseFallback}>
      <swr_1.SWRConfig value={{ suspense: true }}>
        {children}
        <react_hot_toast_1.Toaster />
      </swr_1.SWRConfig>
    </react_1.Suspense>
  </react_error_boundary_1.ErrorBoundary>);
};
exports.Provider = Provider;
