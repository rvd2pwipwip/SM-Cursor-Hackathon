import { useResponsiveLayout } from "../../hooks/useResponsiveLayout";

function AppInfo() {
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
              App Info
            </h1>
            <p className="text-stingray-gray-500 text-xl">
              About this application and settings
            </p>
          </div>

          {/* Info Sections */}
          <div className="space-y-8">
            <div className="bg-gray-100 rounded-lg p-8">
              <h3 className="text-xl font-medium text-gray-700 mb-4">
                Application Details
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-gray-600">
                <div>
                  <strong>Version:</strong> 1.0.0
                </div>
                <div>
                  <strong>Platform:</strong> Web
                </div>
                <div>
                  <strong>Build:</strong> Development
                </div>
                <div>
                  <strong>Framework:</strong> React + TypeScript
                </div>
              </div>
            </div>

            <div className="bg-gray-100 rounded-lg p-8">
              <h3 className="text-xl font-medium text-gray-700 mb-4">
                Settings
              </h3>
              <p className="text-gray-600">
                Application settings and preferences will be available here
              </p>
            </div>

            <div className="bg-gray-100 rounded-lg p-8">
              <h3 className="text-xl font-medium text-gray-700 mb-4">
                Support
              </h3>
              <p className="text-gray-600">
                Help documentation and support resources
              </p>
            </div>
          </div>

          {/* Mock Content Area */}
          <div className="bg-gray-50 rounded-lg p-12 text-center">
            <p className="text-gray-600 text-lg">
              AppInfo screen content will be implemented here
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AppInfo;
