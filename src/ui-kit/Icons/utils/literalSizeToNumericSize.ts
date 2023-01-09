import { ICON_SIZE } from "../types";

export default function literalSizeToNumericSize(literalSize: ICON_SIZE): string {
  switch (literalSize) {
    case ICON_SIZE.EXTRA_LARGE:
      return "48px";
    case ICON_SIZE.LARGE:
      return "32px";
    case ICON_SIZE.SMALL:
      return "16px";
    case ICON_SIZE.MEDIUM:
    default:
      return "24px";
  }
}
