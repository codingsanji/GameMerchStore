export const AssetImage = ({ category, imageName }) => {
    try {
      return require(`../components/assets/${category}/${imageName}`);
    } catch (error) {
      console.error("Image not found:", error);
      return null;
    }
  };
  