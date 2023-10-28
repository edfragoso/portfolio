"use client"
import React from 'react';
import { LoadingSpinner, Spinner } from "./styles/loadingSpinnerStyle"

export function Loading() {
  return (
    <LoadingSpinner>
      <Spinner></Spinner>
    </LoadingSpinner>
  );
};


