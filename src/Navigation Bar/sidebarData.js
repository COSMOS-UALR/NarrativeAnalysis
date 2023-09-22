import React, { useState } from "react";
import * as FaIcons from "react-icons/fa"
import * as AiIcons from "react-icons/ai"
import * as IoIcons from "react-icons/io"
import * as RiIcons from "react-icons/ri"
import './sidebar.css'
export const SidebarData=[
    {
    title:'Home',
    path:'/NarrativeAnalysis',
    /*icon:<AiIcons.AiFillHome/>,*/
    cName:'nav-text'
},
{
    title:'Methodology',
    path:'/NarrativeAnalysis/methodology',
    /*icon:<IoIcons.IoIosPaper/>,*/
    cName:'nav-text'
},
{
    title:'Analysis',
    /*path:'/analysis',*/
    /*icon:<IoIcons.IoIosPaper/>,*/
    iconClosed:<RiIcons.RiArrowDownSFill/>,
    iconOpened:<RiIcons.RiArrowUpSFill/>,

    subNav:[
        {
            title:'Sentiment',
            path:'/NarrativeAnalysis/analysis/sentiment'  

        },
        {
            title:'Emotion',
            path:'/NarrativeAnalysis/analysis/emotion'  

        },
        {
            title:'Morality',
            path:'/NarrativeAnalysis/analysis/morality'  

        },
        {
            title:'Toxicity',
            path:'/NarrativeAnalysis/analysis/toxicity'  

        },

    ],
    cName:'nav-text'
},
]
