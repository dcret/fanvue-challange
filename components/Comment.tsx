import { Grid, Paper, Avatar, Divider, Typography, } from "@mui/material"

const Comment = ({name, content}) => {
    return (
        <div>
             <Paper style={{ padding: "40px 20px" }}>
        <Grid container wrap="nowrap" spacing={2}>
          <Grid item>
            <Avatar alt="Profile" src={
                ''
            } />
          </Grid>
          <Grid justifyContent="left" item xs zeroMinWidth>
            <Typography variant="h4" style={{ margin: 0, textAlign: "left" }}>{name}</Typography>
            <Typography variant="body1">
             {content}
            </Typography>
            <p style={{ textAlign: "left", color: "blue" }}>
              posted 1 minute ago
            </p>
          </Grid>
        </Grid>
        <Divider variant="fullWidth" style={{ margin: "30px 0" }} />
      </Paper>
        </div>
    )
}

export default Comment