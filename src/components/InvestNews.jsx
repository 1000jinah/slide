import { Typography } from "@mui/material";
import React from "react";
const InvestNews = () => {
  return (
    <div style={{ backgroundColor: "#e2e4e6", padding: 20 }}>
      <Typography sx={{ fontWeight: "bold", color: "#636973", mb: 2 }}>
        Invest News
      </Typography>
      <ul className="invest-news">
        <li>US-based Venture Capital Firm to Invest $500M in...</li>
        <li>Salesforce pledges to invest $500M in generative AI...</li>
        <li>VC investment in gaming startups dropped in Q1...</li>
        <li>Calpers plans multibilion-dollar push into venture cap...</li>
        <li>Salesforce pledges to invest $500M in generative AI...</li>
        <li>U.S. Investors Are Bailing Out of China Funds</li>
        <li>OpenAI Keen on supporting startups, education in india</li>
        <li>US investment in China tech scene falls as political...</li>
        <li>Y Combinator wants to reduce growth-stage invest...</li>
        <li>Silicon Valley Turns Angel Investing Into a Social Curr...</li>
        <li>Google in Talks to Invest $200 Milion Into AI Startup</li>
      </ul>
    </div>
  );
};

export default InvestNews;
