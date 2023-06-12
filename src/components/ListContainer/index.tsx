interface ListContainerProps {
  children: React.ReactNode;
  columnWidth: number;
}

const ListContainer: React.FC<ListContainerProps> = ({
  children,
  columnWidth,
}) => (
  <ul
    className="grid gap-6 items-start justify-evenly"
    style={{
      gridTemplateColumns: `repeat(auto-fill, ${columnWidth}px)`,
    }}
  >
    {children}
  </ul>
);

export default ListContainer;
