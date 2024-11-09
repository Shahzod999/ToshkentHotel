interface ClearButtonProps<T> {
  setState: (value: T) => void;
  clearItem: T;
  setEdit?: (edit: boolean) => void;
}

const ClearButton = <T,>({ setState, clearItem, setEdit }: ClearButtonProps<T>) => {
  const handleState = () => {
    setState(clearItem);
    if (setEdit) setEdit(false);
  };

  return (
    <span className="ClearButton cursor" onClick={handleState}>
      clear
    </span>
  );
};

export default ClearButton;
