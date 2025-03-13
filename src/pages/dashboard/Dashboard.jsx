// src/pages/dashboard/Dashboard.jsx
import { useState } from "react";
import { useFetch } from "../../hooks/useFetch";

const Dashboard = () => {
  const [timeframe, setTimeframe] = useState("week");
  const {
    data: stats,
    isLoading,
    error,
  } = useFetch(`/api/stats?timeframe=${timeframe}`, ["stats", timeframe], {
    // Enable stale-while-revalidate
    staleTime: 5 * 60 * 1000, // 5 minutes
  });

  const handleTimeframeChange = (e) => {
    setTimeframe(e.target.value);
  };

  // Placeholder data for when API is not available
  const placeholderStats = {
    totalUsers: 1250,
    activeUsers: 850,
    newUsers: 125,
    conversionRate: 3.2,
    revenue: 15400,
    userActivity: [
      { date: "Mon", users: 120 },
      { date: "Tue", users: 150 },
      { date: "Wed", users: 180 },
      { date: "Thu", users: 190 },
      { date: "Fri", users: 160 },
      { date: "Sat", users: 120 },
      { date: "Sun", users: 110 },
    ],
  };

  const displayStats = stats || placeholderStats;

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold text-gray-900">Dashboard</h1>
        <div>
          <select
            value={timeframe}
            onChange={handleTimeframeChange}
            className="input"
          >
            <option value="day">Today</option>
            <option value="week">This Week</option>
            <option value="month">This Month</option>
            <option value="year">This Year</option>
          </select>
        </div>
      </div>

      {isLoading ? (
        <div className="flex items-center justify-center h-64">
          <p className="text-lg text-gray-500">Loading stats...</p>
        </div>
      ) : error ? (
        <div className="flex items-center justify-center h-64">
          <p className="text-lg text-red-500">
            Error loading stats. Please try again.
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          <div className="bg-white shadow rounded-lg p-6">
            <div className="flex items-center">
              <div className="flex-shrink-0 rounded-md bg-primary-100 p-3">
                <svg
                  className="h-6 w-6 text-primary-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>
              </div>
              <div className="ml-5">
                <p className="text-gray-500 text-sm font-medium">Total Users</p>
                <p className="text-gray-900 text-xl font-semibold">
                  {displayStats.totalUsers.toLocaleString()}
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white shadow rounded-lg p-6">
            <div className="flex items-center">
              <div className="flex-shrink-0 rounded-md bg-green-100 p-3">
                <svg
                  className="h-6 w-6 text-green-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 4v16m8-8H4"
                  />
                </svg>
              </div>
              <div className="ml-5">
                <p className="text-gray-500 text-sm font-medium">New Users</p>
                <p className="text-gray-900 text-xl font-semibold">
                  {displayStats.newUsers.toLocaleString()}
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white shadow rounded-lg p-6">
            <div className="flex items-center">
              <div className="flex-shrink-0 rounded-md bg-blue-100 p-3">
                <svg
                  className="h-6 w-6 text-blue-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
                  />
                </svg>
              </div>
              <div className="ml-5">
                <p className="text-gray-500 text-sm font-medium">
                  Conversion Rate
                </p>
                <p className="text-gray-900 text-xl font-semibold">
                  {displayStats.conversionRate}%
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white shadow rounded-lg p-6">
            <div className="flex items-center">
              <div className="flex-shrink-0 rounded-md bg-purple-100 p-3">
                <svg
                  className="h-6 w-6 text-purple-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <div className="ml-5">
                <p className="text-gray-500 text-sm font-medium">Revenue</p>
                <p className="text-gray-900 text-xl font-semibold">
                  ${displayStats.revenue.toLocaleString()}
                </p>
              </div>
            </div>
          </div>
        </div>
      )}

      <div className="bg-white shadow rounded-lg p-6">
        <h2 className="text-lg font-medium text-gray-900 mb-4">
          User Activity
        </h2>
        <div className="h-64">
          {/* Simple chart representation with bars */}
          <div className="flex h-48 items-end space-x-2">
            {displayStats.userActivity.map((item) => (
              <div
                key={item.date}
                className="flex flex-col items-center flex-1"
              >
                <div
                  className="w-full bg-primary-500 rounded-t"
                  style={{ height: `${(item.users / 200) * 100}%` }}
                ></div>
                <div className="text-xs text-gray-500 mt-2">{item.date}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
