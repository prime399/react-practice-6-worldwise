import React from "react";
import { useNavigate } from "react-router-dom";
import Button from "./Button";

export default function BackButton() {
  const navigate = useNavigate();

  return (
    <Button
      type="button"
      style="bg-gray-200 text-gray-700 mx-4 mt-4 px-5 py-2 rounded hover:bg-gray-300 transition"
      onClick={() => navigate(-1)}
    >
      &larr; Back
    </Button>
  );
}
