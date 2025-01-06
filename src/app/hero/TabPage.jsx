import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";

const TabPage = () => {
  return (
    <>
      <div className="mt-16 mb-12">
        <h1
          style={{ color: "#293763" }}
          className="text-center text-4xl font-bold"
        >
          Monitask is suitable for
        </h1>

        {/* Tab Div */}

        <div className="flex justify-center items-center mt-12 ml-12 mr-12">
          <Tabs defaultValue="smallremoteteam" className="w-full">
            <TabsList className="flex justify-between w-full">
              <TabsTrigger
                className=" w-full text-center text-xl"
                value="smallremoteteam"
              >
                Small Remote Teams
              </TabsTrigger>
              <TabsTrigger
                className="  w-full text-xl text-center"
                value="mediumcompanies"
              >
                Medium Companies
              </TabsTrigger>
              <TabsTrigger
                className="  w-full text-xl text-center"
                value="largecompanies"
              >
                Large Companies
              </TabsTrigger>
            </TabsList>
            <TabsContent value="smallremoteteam">
              <div className="flex justify-between gap-12">
                <div className=" container ml-12 mt-8">
                  <h1
                    style={{ color: "#5470CB" }}
                    className="text-2xl font-bold"
                  >
                    IF YOU
                  </h1>
                  <p className="text-xl">have a team of 5-20 peoples</p>

                  <h1
                    style={{ color: "#5470CB" }}
                    className="text-2xl mt-8 font-bold"
                  >
                    AND
                  </h1>
                  <p className="text-xl">your team members can work remotely</p>
                </div>
                <div className=" container mt-8 ">
                  <p className="flex flex-end text-lg mt-2">
                    Any remote teams requires the employee monitoring software.
                    Monitask is ideal for managing small teams working remotely.
                    It has everything you need to organize your workflow and
                    monitor the work of remote employees.
                  </p>
                </div>
              </div>
              <div className="flex justify-center items-center">
                <Button
                  className="mt-12 font-bold h-12"
                  style={{ backgroundColor: "#4866C7", color: "white" }}
                >
                  TRY MONITASK FOR FREE WITH 10 DAY TRIAL
                </Button>
              </div>
            </TabsContent>

            <TabsContent value="mediumcompanies">
              <div className="flex justify-between gap-12">
                <div className=" container ml-12 mt-8">
                  <h1
                    style={{ color: "#5470CB" }}
                    className="text-2xl font-bold"
                  >
                    IF YOU
                  </h1>
                  <p className="text-xl">
                    have a team of more than 20-100 employees
                  </p>

                  <h1
                    style={{ color: "#5470CB" }}
                    className="text-2xl mt-8 font-bold"
                  >
                    AND
                  </h1>
                  <p className="text-xl">
                    It is important for you to be aware of your team’s workflow
                  </p>
                </div>
                <div className=" container mt-8 ">
                  <p className="flex flex-end text-lg mt-2">
                    Monitask is ideal for those who want to have a full
                    understanding of the effectiveness of their team, regardless
                    of where the employees work. With the Monitask you can
                    effectively manage your team’s working time.
                  </p>
                </div>
              </div>
              <div className="flex justify-center items-center">
                <Button
                  className="mt-12 font-bold h-12"
                  style={{ backgroundColor: "#4866C7", color: "white" }}
                >
                  TRY MONITASK FOR FREE WITH 10 DAY TRIAL
                </Button>
              </div>
            </TabsContent>

            <TabsContent value="largecompanies">
              <div className="flex justify-between gap-12">
                <div className=" container ml-12 mt-8">
                  <h1
                    style={{ color: "#5470CB" }}
                    className="text-2xl font-bold"
                  >
                    IF YOU
                  </h1>
                  <p className="text-xl">
                    have a team of more than 100 employees
                  </p>

                  <h1
                    style={{ color: "#5470CB" }}
                    className="text-2xl mt-8 font-bold"
                  >
                    AND
                  </h1>
                  <p className="text-xl">
                    want to increase and measure the productivity of your work
                    processes
                  </p>
                </div>
                <div className=" container mt-8 ">
                  <p className="flex flex-end text-lg mt-2">
                    Use a Monitask to increase your company’s productivity and
                    the efficiency of your teams. Wherever you are, no matter
                    how many people work with you, Monitask will help you keep
                    your hand on the pulse of your productivity.
                  </p>
                </div>
              </div>
              <div className="flex justify-center items-center">
                <Button
                  className="mt-12 font-bold h-12"
                  style={{ backgroundColor: "#4866C7", color: "white" }}
                >
                  TRY MONITASK FOR FREE WITH 10 DAY TRIAL
                </Button>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </>
  );
};

export default TabPage;
