import { Draft } from "immer";
import { DataGridState } from "./empData";

export type Action =
  | {
      type: "search-name" | "company-name" | "location";
      input: string;
    }
  | { type: "rating-inp" | "id-inp"; input: number }
  | {
      type:
        | "search"
        | "sort-id-asc"
        | "sort-id-dec"
        | "sort-by-salary"
        | "sort-salary-dec"
        | "sort-salary-asc"
        | "sort-rating-asc"
        | "sort-rating-dec"
        | "sort-name-asc"
        | "sort-name-dec"
        | "sort-company-asc"
        | "sort-company-dec"
        | "sort-location-asc"
        | "sort-location-dec";
    }
  | { type: "pagination"; currPage: number };

export function reducer(draft: Draft<DataGridState>, action: Action) {
  switch (action.type) {
    case "search-name": {
      if (!action.input) {
        draft.filtered = draft.original;
        return;
      }
      draft.filtered = [
        ...draft.original.filter(d =>
          d.full_name.toLowerCase().includes(action.input.toLowerCase())
        ),
      ];
      return;
    }
    case "company-name": {
      if (!action.input) {
        draft.filtered = draft.original;
        return;
      }
      draft.filtered = [
        ...draft.original.filter(d =>
          d.company.toLowerCase().includes(action.input.toLowerCase())
        ),
      ];
      return;
    }
    case "location": {
      if (!action.input) {
        draft.filtered = draft.original;
        return;
      }
      draft.filtered = [
        ...draft.original.filter(d =>
          d.location.toLowerCase().includes(action.input.toLowerCase())
        ),
      ];
      return;
    }
    case "rating-inp": {
      if (!action.input) {
        draft.filtered = draft.original;
        return;
      }
      draft.filtered = [
        ...draft.original.filter(d => d.rating === action.input),
      ];
      return;
    }

    case "id-inp": {
      if (!action.input) {
        draft.filtered = draft.original;
        return;
      }
      draft.filtered = [...draft.original.filter(d => d.id === action.input)];
      return;
    }

    case "sort-id-asc": {
      draft.filtered = [...draft.original.sort((a, b) => a.id - b.id)];
      return;
    }
    case "sort-id-dec": {
      draft.filtered = [...draft.original.sort((a, b) => b.id - a.id)];
      return;
    }
    case "sort-salary-asc": {
      draft.filtered = [...draft.original.sort((a, b) => a.salary - b.salary)];
      return;
    }
    case "sort-salary-dec": {
      draft.filtered = [...draft.original.sort((a, b) => b.salary - a.salary)];
      return;
    }
    case "sort-rating-asc": {
      draft.filtered = [...draft.original.sort((a, b) => a.rating - b.rating)];
      return;
    }
    case "sort-rating-dec": {
      draft.filtered = [...draft.original.sort((a, b) => b.rating - a.rating)];
      return;
    }

    case "sort-name-asc": {
      draft.filtered = [
        ...draft.original.sort((a, b) => {
          const fa = a.full_name.toLowerCase();
          const fb = b.full_name.toLowerCase();
          if (fa < fb) {
            return -1;
          }
          if (fa > fb) {
            return 1;
          }
          return 0;
        }),
      ];
      return;
    }
    case "sort-name-dec": {
      draft.filtered = [
        ...draft.original.sort((a, b) => {
          const fa = a.full_name.toLowerCase();
          const fb = b.full_name.toLowerCase();
          if (fa < fb) {
            return 1;
          }
          if (fa > fb) {
            return -1;
          }
          return 0;
        }),
      ];
      return;
    }
    case "sort-company-asc": {
      draft.filtered = [
        ...draft.original.sort((a, b) => {
          const fa = a.company.toLowerCase();
          const fb = b.company.toLowerCase();
          if (fa < fb) {
            return -1;
          }
          if (fa > fb) {
            return 1;
          }
          return 0;
        }),
      ];
      return;
    }
    case "sort-company-dec": {
      draft.filtered = [
        ...draft.original.sort((a, b) => {
          const fa = a.company.toLowerCase();
          const fb = b.company.toLowerCase();
          if (fa < fb) {
            return 1;
          }
          if (fa > fb) {
            return -1;
          }
          return 0;
        }),
      ];
      return;
    }
    case "sort-location-asc": {
      draft.filtered = [
        ...draft.original.sort((a, b) => {
          const fa = a.location.toLowerCase();
          const fb = b.location.toLowerCase();
          if (fa < fb) {
            return -1;
          }
          if (fa > fb) {
            return 1;
          }
          return 0;
        }),
      ];
      return;
    }
    case "sort-location-dec": {
      draft.filtered = [
        ...draft.original.sort((a, b) => {
          const fa = a.location.toLowerCase();
          const fb = b.location.toLowerCase();
          if (fa < fb) {
            return 1;
          }
          if (fa > fb) {
            return -1;
          }
          return 0;
        }),
      ];
      return;
    }
    case "pagination": {
      draft.filtered.map(ele => (ele.pageNumber = action.currPage));
    }
  }
}
