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
exports.reducer = void 0;
function reducer(draft, action) {
    switch (action.type) {
        case "search-name": {
            if (!action.input) {
                draft.filtered = draft.original;
                return;
            }
            draft.filtered = __spreadArray([], draft.original.filter(function (d) {
                return d.full_name.toLowerCase().includes(action.input.toLowerCase());
            }), true);
            return;
        }
        case "company-name": {
            if (!action.input) {
                draft.filtered = draft.original;
                return;
            }
            draft.filtered = __spreadArray([], draft.original.filter(function (d) {
                return d.company.toLowerCase().includes(action.input.toLowerCase());
            }), true);
            return;
        }
        case "location": {
            if (!action.input) {
                draft.filtered = draft.original;
                return;
            }
            draft.filtered = __spreadArray([], draft.original.filter(function (d) {
                return d.location.toLowerCase().includes(action.input.toLowerCase());
            }), true);
            return;
        }
        case "rating-inp": {
            if (!action.input) {
                draft.filtered = draft.original;
                return;
            }
            draft.filtered = __spreadArray([], draft.original.filter(function (d) { return d.rating === action.input; }), true);
            return;
        }
        case "id-inp": {
            if (!action.input) {
                draft.filtered = draft.original;
                return;
            }
            draft.filtered = __spreadArray([], draft.original.filter(function (d) { return d.id === action.input; }), true);
            return;
        }
        case "sort-id-asc": {
            draft.filtered = __spreadArray([], draft.original.sort(function (a, b) { return a.id - b.id; }), true);
            return;
        }
        case "sort-id-dec": {
            draft.filtered = __spreadArray([], draft.original.sort(function (a, b) { return b.id - a.id; }), true);
            return;
        }
        case "sort-salary-asc": {
            draft.filtered = __spreadArray([], draft.original.sort(function (a, b) { return a.salary - b.salary; }), true);
            return;
        }
        case "sort-salary-dec": {
            draft.filtered = __spreadArray([], draft.original.sort(function (a, b) { return b.salary - a.salary; }), true);
            return;
        }
        case "sort-rating-asc": {
            draft.filtered = __spreadArray([], draft.original.sort(function (a, b) { return a.rating - b.rating; }), true);
            return;
        }
        case "sort-rating-dec": {
            draft.filtered = __spreadArray([], draft.original.sort(function (a, b) { return b.rating - a.rating; }), true);
            return;
        }
        case "sort-name-asc": {
            draft.filtered = __spreadArray([], draft.original.sort(function (a, b) {
                var fa = a.full_name.toLowerCase();
                var fb = b.full_name.toLowerCase();
                if (fa < fb) {
                    return -1;
                }
                if (fa > fb) {
                    return 1;
                }
                return 0;
            }), true);
            return;
        }
        case "sort-name-dec": {
            draft.filtered = __spreadArray([], draft.original.sort(function (a, b) {
                var fa = a.full_name.toLowerCase();
                var fb = b.full_name.toLowerCase();
                if (fa < fb) {
                    return 1;
                }
                if (fa > fb) {
                    return -1;
                }
                return 0;
            }), true);
            return;
        }
        case "sort-company-asc": {
            draft.filtered = __spreadArray([], draft.original.sort(function (a, b) {
                var fa = a.company.toLowerCase();
                var fb = b.company.toLowerCase();
                if (fa < fb) {
                    return -1;
                }
                if (fa > fb) {
                    return 1;
                }
                return 0;
            }), true);
            return;
        }
        case "sort-company-dec": {
            draft.filtered = __spreadArray([], draft.original.sort(function (a, b) {
                var fa = a.company.toLowerCase();
                var fb = b.company.toLowerCase();
                if (fa < fb) {
                    return 1;
                }
                if (fa > fb) {
                    return -1;
                }
                return 0;
            }), true);
            return;
        }
        case "sort-location-asc": {
            draft.filtered = __spreadArray([], draft.original.sort(function (a, b) {
                var fa = a.location.toLowerCase();
                var fb = b.location.toLowerCase();
                if (fa < fb) {
                    return -1;
                }
                if (fa > fb) {
                    return 1;
                }
                return 0;
            }), true);
            return;
        }
        case "sort-location-dec": {
            draft.filtered = __spreadArray([], draft.original.sort(function (a, b) {
                var fa = a.location.toLowerCase();
                var fb = b.location.toLowerCase();
                if (fa < fb) {
                    return 1;
                }
                if (fa > fb) {
                    return -1;
                }
                return 0;
            }), true);
            return;
        }
        case "pagination": {
            draft.filtered.map(function (ele) { return (ele.pageNumber = action.currPage); });
        }
    }
}
exports.reducer = reducer;
