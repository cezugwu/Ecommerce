import { Link, useLocation } from "react-router-dom";

const LinkBoard = () => {
  const location = useLocation();

  // Extract "Ecommerce" from pathname
  const pathPart = location.pathname.split("/").filter(Boolean)[0] || "";

  // Extract "product" from hash
  const hashPart = location.hash.replace("#", "");

  // Build final breadcrumb array
  const parts = [];
  if (pathPart) parts.push(pathPart);
  if (hashPart) parts.push(hashPart);

  return (
    <div className="flex gap-2 text-sm bg-white sticky top-20 z-10 p-2 rounded-md">
      {parts.map((item, index) => {
        const isLast = index === parts.length - 1;

        return (
          <div key={index} className="flex items-center gap-2">
            {isLast ? (
              <span className="font-jost text-[1.1em] text-gray-700 font-medium">
                {item.charAt(0).toUpperCase() + item.slice(1)}
              </span>
            ) : (
              <Link
                to={`/${item}`}
                className="hover:underline font-jost text-[1.1em] text-gray-700 font-light"
              >
                {item.charAt(0).toUpperCase() + item.slice(1)}
              </Link>
            )}
            {!isLast && <span className="text-gray-500">{">"}</span>}
          </div>
        );
      })}
    </div>
  );
};

export default LinkBoard;
