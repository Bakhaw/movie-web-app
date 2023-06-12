interface ListTitleProps {
  children: React.ReactNode;
}

const ListTitle: React.FC<ListTitleProps> = ({ children }) => (
  <h1 className="text-center text-white text-2xl bg-purple-light py-4 mb-8">
    {children}
  </h1>
);

export default ListTitle;
