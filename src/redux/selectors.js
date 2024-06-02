import { createSelector } from "@reduxjs/toolkit";

export const selectContats = state => state.contats.item;
export const selectFilter = state => state.filter;

export const selectisLoading = state => state.contats.isLoading;

export const selectError = state => state.contats.error;

export const selectFilteredContats = createSelector(
    [selectContats, selectFilter],
    (contats, filter) => {
        return contats.filter(contact =>
            contact.name.toLowerCase().includes(filter.toLowerCase())
        );
    }
);