
import { PieChart, Pie, Legend, Cell, ResponsiveContainer,BarChart,Bar,XAxis,YAxis } from "recharts"

import { MdDashboardCustomize } from "react-icons/md";
import { FaTags } from "react-icons/fa6";
import { GrSchedules } from "react-icons/gr";
import { HiMiniUsers } from "react-icons/hi2";
import { IoIosSettings } from "react-icons/io";
import { IoSearch } from "react-icons/io5";
import { FaRegBell } from "react-icons/fa";
import { FaVectorSquare } from "react-icons/fa6";
import { FaRegThumbsUp } from "react-icons/fa";
import './index.css'

const data1 = [
    {
      group_name: "Week-1",
      Guest: 200,
      User: 400,
    },
    {
      group_name: "Week-2",
      Guest: 3000,
      User: 500,
    },
    {
      group_name: "Week-3",
      Guest: 1000,
      User: 1500,
    },
    {
      group_name: "Week-4",
      Guest: 700,
      User: 1200,
    },
  ]

const data = [
    {
      count: 809680,
      language: "Basic Trees",
    },
    {
      count: 4555697,
      language: "Custom Short Pants",
    },
    {
      count: 12345657,
      language: "super Hoodies",
    },
  ]

const DashBoardpage=()=>{
    const DataFormatter = (number) => {
        if (number > 1000) {
          return `${(number / 1000).toString()}k`
        }
        return number.toString()
      }
    return(
        
    <div className='dashboard-container'>
        <div className='navigation-container'>
            <h1 className='heading'>Board.</h1>
            <div className='items-container'>
                <div className='icon-container'>
                    <MdDashboardCustomize className="icons"/>
                    <p className='icon-names'>Dashboard</p>
                </div>
                <div className='icon-container'>
                    <FaTags className="icons"/>
                    <p className='icon-names'>Transaction</p>
                </div>
                <div className='icon-container'>
                    <GrSchedules className="icons"/>
                    <p className='icon-names'>Schedules</p>
                </div>
                <div className='icon-container'>
                    <HiMiniUsers className="icons"/>
                    <p className='icon-names'>Users</p>
                </div>
                <div className='icon-container'>
                    <IoIosSettings className="icons"/>
                    <p className='icon-names'>Settings</p>
                </div>
            </div>
            <div className='help-contact-container'>
                <p className="help">Help</p>
                <p className="help">Contact Us</p>
            </div>
        </div>
        <div className="right-side-container">
            <div className="header-container">
                <h1 >DashBoard</h1>
                <div className="search-profile-container">
                    <div className="search-icon-container">
                        <input type='search' className="searchInput" placeholder="search"/>
                        <IoSearch/>
                    </div>
                    <FaRegBell className="notification-icon"/>
                    <img src='https://thumbs.dreamstime.com/z/unknown-male-avatar-profile-image-businessman-vector-unknown-male-avatar-profile-image-businessman-vector-profile-179373829.jpg?w=768' className="profile" alt='profile'/>
                </div>
            </div>
            <div className="total-count-container">
                <div className="revenues-count-container">
                    <FaVectorSquare size={27}/>
                    <p>Total Revenues</p>
                    <p className="count">$2,135,564</p>
                </div>
                <div className="trasaction-count-container">
                    <FaTags size={27}/>
                    <p>Total Trasactions</p>
                    <p className="count">3,245</p>
                </div>
                <div className="likes-count-container">
                    <FaRegThumbsUp size={27}/>
                    <p>Total Likes</p>
                    <p className="count">11,345</p>
                </div>
                <div className="users-count-container">
                    <HiMiniUsers size={27}/>
                    <p>Total Users</p>
                    <p className="count">984</p>
                </div>
            </div>
            <div className="Bar-chart-container">
                <ResponsiveContainer width="100%" height={500}>
                    <BarChart
                        data={data1}
                        margin={{
                        top: 5,
                        }}
                    >
                        <XAxis
                        dataKey="group_name"
                        tick={{
                            stroke: "gray",
                            strokeWidth: 1,
                        }}
                        />
                        <YAxis
                        tickFormatter={DataFormatter}
                        tick={{
                            stroke: "gray",
                            strokeWidth: 0,
                        }}
                        />
                        <Legend
                        wrapperStyle={{
                            padding: 30,
                        }}
                        />
                        <Bar dataKey="Guest" name="Guest" fill="#E9A0A0" barSize="20%" />
                        <Bar dataKey="User" name="User" fill="#9BDD7C" barSize="20%" />
                    </BarChart>
                </ResponsiveContainer>
            </div>
            <div className="pie-chart-schedule-container">
                <div className="pie-chart-container">
                    <h1>Top Products</h1>
                    <ResponsiveContainer width="100%" height={300}>
                        <PieChart>
                            <Pie
                            cx="70%"
                            cy="40%"
                            data={data}
                            startAngle={0}
                            endAngle={360}
                            innerRadius="40%"
                            outerRadius="70%"
                            dataKey="count"
                            >
                            <Cell name="Basic Trees" fill="#fecba6" />
                            <Cell name="Custom Short Pants" fill="#b3d23f" />
                            <Cell name="Super Hoodies" fill="#a44c9e" />
                            </Pie>
                            <Legend
                            iconType="circle"
                            layout="vertical"
                            verticalAlign="right"
                            align="right"
                            />
                        </PieChart>
                        </ResponsiveContainer>
                </div>
                <div className="days-schedules-container">
                    <h1>Today's schedule</h1>
                    <div className="schedules-container">
                        <hr className="line1"/>
                        <div className="details">
                            <h1 className="schedule-heading">Meeting with suppilers from Kuta Bali</h1>
                            <p className="details">14:00-15:00</p>
                            <p className="details">at Sunset Road,Kuta,Bali</p>
                        </div>
                    </div>
                    <div className="schedules-container2">
                        <hr className="line2"/>
                        <div className="details">
                            <h1 className="schedule-heading">Check operation at Giga Factory 1</h1>
                            <p className="details">18:00-20:00</p>
                            <p className="details">at Central Jakarta</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    
)
                    }
export default DashBoardpage