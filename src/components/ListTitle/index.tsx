interface ListTitleProps {
  children: React.ReactNode;
}

const ListTitle: React.FC<ListTitleProps> = ({ children }) => (
  <h1 className="py-4 mb-6 text-2xl font-semibold tracking-tight">
    {children}
  </h1>
);

export default ListTitle;
