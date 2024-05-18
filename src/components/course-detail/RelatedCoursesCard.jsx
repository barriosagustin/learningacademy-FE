import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import StarRateIcon from "@mui/icons-material/StarRate";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import ArticleIcon from "@mui/icons-material/Article";
import "../../styles/related-courses-card.css";

const RelatedCoursesCard = () => {
  return (
    <Card sx={{ maxWidth: 400 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="280"
          image="https://echooling-react.vercel.app/static/media/2.330bf7ab6f7a9c287f65.jpg"
          alt="related course img"
        />
        <CardContent>
          <Typography gutterBottom variant="h6" component="div">
            <div className="related-list">
              <div className="reviews">
                <StarRateIcon /> 4.2 review
              </div>
              <div className="students">
                <PersonOutlineIcon /> 36 students
              </div>
            </div>
          </Typography>
          <Typography variant="body2" fontSize={20} color={"#00306E"}>
            Dave conservatoire is the Entirely free online
            <div className="container-avatar">
              <img
                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACIAAAAiCAMAAAANmfvwAAAACXBIWXMAAAsTAAALEwEAmpwYAAACu1BMVEVHcEyfjZu2q8u2q8y0qcq4rc2zqMq1qsuun760qMWsosWxqL+2q8u0qsy1qsuwpcezqMuwpcekmL24rc2wp8aPg51JIhS3rMy3rMyshYapncCXibKglLqlmb2ajrSPgaqKfKajd4ltYpUhDQgQAACFdqF/cJuzqMg+Gg5BGQyzqMZaNifixcRKWGxta3gqCgGWeXpoOzSbWkvGmrXSorzfvsO9kZzRorzBmpq4rc23rMyzqMq1qsyyp8mxpsi0qcy1qsvBud9GJRe/ttq8s9Wwp8anmr4jCAO3rdG5sNcYAgGuo8VVLRyfk7oAAAASAACvpMY8Ih42HBMqFA5NMCRBIRR2TDlMJhcuDwSRg66pncCNf6uYjbMxHhsfAgBbMyJnNCCroMPzupujl72ckLf/2L7/387do4n0xK0kFA/FveVSOS1eNimjkaZhNCFwSDSmak4JAQTjqow8Ewf+07f+zarYnH+tosSVh7DDmYaIeqWCc51HLSKbiqk9GQyombmTgaBdRk88HxQwGRCSfZRqVE/UmXfsqpHxwKWCVEKrcFu+dGbBgmaXiIyabFhELDamk7Cxp9B6YHN+b4JONkJqSUJIHQt0VVBdQTLOkG+RfIZXJRTssJRnPSz+yrHltJWHamT4xJ3twaBiPTuOZE/Wno3luJ/nr5z807/+2MbgnIy4jHl6QzCteWXwybPcrJi0cl3HpqGPU0H1zb5wdoy3fGh3ZYyViLSqnsxmUmJ2WmWNdICIeJFMLyofDgh9WFeCcnyIUDiZX0poRTRVPTmCRjD/0a67fm7csqiTcWu7n6LTpav/wqibgX+Ih5DTr7f62sycVUZUWmlvMCfAi3XMj3iumpNxaZ2rl7O6qcuGbIx9ZnnGtcfxsJewXVVwbHXbiH/Pe2zBpsfSv+D+w521jZXSlYmspK5SGAgIVzP+AAAAg3RSTlMA/n5aIrOg+xY9fVphzOxgsrTL8/IitOvM/uxg7Pmgsjx8WVp+tPLz8yO0PfO06xbLYJ/r+bOfy2D////////////////////////+/////////////////////////////////////////////////////////////////////////gPC5HkAAAOzSURBVDjLbZTlexpZFIcnbQpEKql3d7vWrrsvDAwzQDJAKG4tRUKLW/CFuLsnjbu7t1t3d113/TN2Zpp9kj7t+/W+z73n3nt+BwCWoSSStm8jk7dtJyVSgGcRt4EMwzAHYXNpGGvinhJi32bCIMy2012FOWwOCFOpa2KfNFa/ATIZHPu+tqJMefOZFDZMo1I3rV5prGKAIIRwjjcppC2OAnUek3Coq5aNeAgCk9ncZr2iwKEVCr2sHh4HO2qFkyCGIIiLHBPIZZlaoSxfxBe0IVR8G+rSWbGbk8WQ2F6ockikKpWyOJSuFuldCHYtKm3T45qTkjGFzstTSE6W+4xdJtOl4mz0NJdDIy5PvIdYjDlIVr7UpjQGzObREWuwEj2Zg1WMg79Pkhh37A2oTHauo3T+jtlsCv6pQrM4dBgH24aSmoo5EHJUZGNVlnSN3jFPRSJGpaiQQyMcMgVYHw6HU8Ugt5GvVVUPzD2wWifLJrurhT8gNJiOAScCpLS0tHCYmyI5JRd09hT9+9A486jZNy7MQ6gw4ZCAjWk4vCxZgdwzcfVRWXVkMfLAOCDUfseBCWct8Nw+HF4uKlOUWUI3xqunIwHT8GU1H7sSrsDrgJ0pOLwTOpv64ph1vrzSHHo4NPyTW1fLflwLGdh5AKeuQYcq9OmDlrv3y32WipLxAoULV2AYJAMv7MGpq+ejLZ0TM5WLcxXDg4slPV69i0dn4qwDNh7E+fqoSKs0nLWcu//3/ODPvhtNoqZaLmGAa4EX9+McyOM7PH53ccfdirFfS4KTp6T13zJBAhLw/FcYR/Y08h3uQ2p3aLrit7HgoM3bX1i7pKwHKHtxDtbw5QIDyysIdY2MlrYI/cdyc7iEgX0A8JImqtEcqdHJnQYPKmqfuVze6hE6v8+lY+sMBmMD9tMvR6NRTVSCZp53etxqnb99rneAX58FMRlMBtaNRFhey8jQZEjUmUpn59mLhon07t50fy4Cihm4kUR03ZbXM/YeZkklZXq9Mr211VLaXXy+/3ce3tDQ5qUwvfrN4RqWRKp0GoqudviG+vqGZlWN9jrcSfg/Aq9o+ap8mdMtOH38WsDa13tz4Z73xB8gkx6/HKTdNla2lNUuuPDLlUvG0uCOBVfVvZgf98evjOOuN7NZrEOKC2emA9YR0+y1qtsxDe8mPBnqt7bKVdlo0WzVVMA0VXVr4Z9b7215aja8szXf33/l5l/Xr9+OadvxWdwzJ8wHH3384fsxn37yxedfrhxB/wFIpm4t3CUNNAAAAABJRU5ErkJggg=="
                alt="avatar"
                className="avatar"
              />
              Charlie Doyle
            </div>
          </Typography>
          <hr
            style={{
              width: "100%",
              border: "0.5px solid #ccc",
              marginTop: "25px",
              marginBottom: "25px",
            }}
          />
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <ArticleIcon />
            <Typography
              variant="body2"
              display={"flex"}
              flex={1}
              marginLeft={"0.3em"}
              fontSize={15}
              color="text.secondary"
            >
              4 lessons
            </Typography>
            <Typography variant="body2" fontSize={17} color={"#101217"}>
              $68.00
            </Typography>
          </div>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default RelatedCoursesCard;
