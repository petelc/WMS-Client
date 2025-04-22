import { FieldValues, Path, UseFormSetError } from "react-hook-form";

type Order = "asc" | "desc";

/**
 * Formats a currency amount in dollars.
 * @param amount
 * @returns
 */
export function currencyFormat(amount: number) {
  return `$${(amount / 100).toFixed(2)}`;
}

/**
 * Removes empty values from an object
 * @param values
 * @returns
 */
export function filterEmptyValues(values: object) {
  return Object.fromEntries(
    Object.entries(values).filter(
      ([, value]) =>
        value != "" &&
        value != null &&
        value != undefined &&
        value.length !== 0,
    ),
  );
}

/**
 *  Handle API Error
 * @param error
 * @param setError
 * @param fieldNames
 */
export function handleApiError<T extends FieldValues>(
  error: unknown,
  setError: UseFormSetError<T>,
  fieldNames: Path<T>[],
) {
  const apiError = (error as { message: string }) || {};

  if (apiError.message && typeof apiError.message === "string") {
    const errorArray = apiError.message.split(",");

    errorArray.forEach((e) => {
      const matchedField = fieldNames.find((fieldName) =>
        e.toLowerCase().includes(fieldName.toString().toLowerCase()),
      );

      if (matchedField) setError(matchedField, { message: e.trim() });
    });
  }
}

/**
 * Sorting Functions
 */

export function descendingComparator<T>(a: T, b: T, orderBy: keyof T) {
  if (b[orderBy] < a[orderBy]) {
    return -1;
  }
  if (b[orderBy] > a[orderBy]) {
    return 1;
  }
  return 0;
}

export function getComparator<Key extends keyof string>(
  order: Order,
  orderBy: Key,
): (
  a: { [key in Key]: number | string },
  b: { [key in Key]: number | string },
) => number {
  return (a, b) =>
    order === "desc"
      ? descendingComparator(a, b, orderBy)
      : -descendingComparator(a, b, orderBy);
}
