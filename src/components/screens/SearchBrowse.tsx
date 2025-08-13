import { useResponsiveLayout } from "../../hooks/useResponsiveLayout";

function SearchBrowse() {
  const { leftMargin, horizontalPadding } = useResponsiveLayout();

  return (
    <div className="flex-1 relative">
      {/* Main content area */}
      <div className="h-full overflow-y-auto hide-scrollbar">
        <div
          className="space-y-10 pt-48 lg:pt-36 pb-10"
          style={{
            marginLeft: `${leftMargin}px`,
            paddingLeft: `${horizontalPadding}px`,
            paddingRight: `${horizontalPadding}px`,
          }}
        >
          {/* Page Header */}
          <div className="text-center">
            <h1 className="text-stingray-gray-700 font-roboto font-normal text-6xl leading-tight mb-4">
              Search & Browse
            </h1>
            <p className="text-stingray-gray-500 text-xl">
              Discover new content and explore our catalog
            </p>
          </div>

          {/* Placeholder Content */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gray-100 rounded-lg p-8 text-center">
              <h3 className="text-lg font-medium text-gray-700 mb-2">Search</h3>
              <p className="text-gray-500">Find specific content</p>
            </div>
            <div className="bg-gray-100 rounded-lg p-8 text-center">
              <h3 className="text-lg font-medium text-gray-700 mb-2">Browse</h3>
              <p className="text-gray-500">Explore by category</p>
            </div>
            <div className="bg-gray-100 rounded-lg p-8 text-center">
              <h3 className="text-lg font-medium text-gray-700 mb-2">
                Discover
              </h3>
              <p className="text-gray-500">Find new favorites</p>
            </div>
          </div>

          {/* Mock Content Area */}
          <div className="bg-gray-50 rounded-lg p-12 text-center">
            <p className="text-gray-600 text-lg">
              SearchBrowse screen content will be implemented here
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SearchBrowse;
