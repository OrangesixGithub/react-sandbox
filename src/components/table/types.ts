import type { TableProps } from "@orangesix/react/table";

export type TableVariantProps = {
    size: NonNullable<TableProps["styleSize"]>;
    striped: boolean;
    bordered: boolean;
    frozen: boolean;
    empty: boolean;
};
