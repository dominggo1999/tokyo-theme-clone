const SectionGrid = ({ children, className }) => {
  return (
    <div className={`grid ${className}`}>
      {children}
    </div>
  );
};

export default SectionGrid;
