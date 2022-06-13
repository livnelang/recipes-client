import ContentLoader from "react-content-loader";

const NUM_OF_ITEMS = 4;
const RecipeListSkeleton = () => {
  const list = [];
  for (let i = 0; i < NUM_OF_ITEMS; i++) {
    list.push(
      <ContentLoader
        key={i}
        speed={0.5}
        width={157}
        height={198}
        viewBox="0 0 157 198"
        backgroundColor="#f3f3f3"
        foregroundColor="#ecebeb"
      >
        <rect x="10" y="167" rx="0" ry="0" width="144" height="16" />
        <rect x="10" y="199" rx="0" ry="0" width="144" height="10" />
        <rect x="10" y="11" rx="4" ry="4" width="140" height="144" />
      </ContentLoader>
    );
  }
  return <>{list}</>;
};

export default RecipeListSkeleton;
