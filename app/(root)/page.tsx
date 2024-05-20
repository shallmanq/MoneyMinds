import HeaderBox from "@/components/HeaderBox";
import RightSidebar from "@/components/RightSidebar";
import TotalBalanceBox from "@/components/TotalBalanceBox";
import React from "react";

const Home = () => {
  const loggedIn = {
    firstName: "Shallman",
    lastName: "Quashie",
    email: "shallmanq@gmail.com"
  };

  return (
    <section className="home">
      <div className="home-content">
        <header className="home-header">
          <HeaderBox
            type="greeting"
            title="Welcome"
            user={loggedIn?.firstName || "Guest"}
            subtext="Access and manage your accout and transactions efficiently"
          />
        </header>
        <TotalBalanceBox
          accounts={[]}
          totalBanks={1}
          totalCurrentBalance={1250.35}
        />
        RECENT TRANSACTIONS
      </div>

      <RightSidebar
        user={loggedIn}
        transctions={[]}
        banks={[{ currentBalance: 123.5 }, { currentBalance: 500.53 }]}
      />
    </section>
  );
};

export default Home;
