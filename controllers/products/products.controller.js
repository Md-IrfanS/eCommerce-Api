export const getProductController = (req, res) => {
  res.json({
    details: {
      products: [],
    },
  });
};

export const postProductController = (req, res) => {
  res.json({ message: "created successfully" });
};

export const putProductController = (req, res) => {
  res.json({ message: "updated successfully" });
};

export const deleteProductController = (req, res) => {
  res.json({ message: "Deleted successfully" });
};
