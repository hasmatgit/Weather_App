import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import "./InfoBox.css";
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import AcUnitIcon from '@mui/icons-material/AcUnit';


export default function InfoBox({ info }) {
  const INIT_URL = "https://images.unsplash.com/photo-1682250628422-85b7184605de?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fG1pc3R5JTIwd2VhdGhlcnxlbnwwfHwwfHx8MA%3D%3D";

    const COLD_URL = "https://media.istockphoto.com/id/853844276/photo/blue-ice-and-cracks-on-the-surface-of-the-ice-frozen-lake-under-a-blue-sky-in-the-winter-the.jpg?s=612x612&w=0&k=20&c=gtWZP3TFa9ALn597BTe5atl3GkEsafs6B8bedSo6tvU=";   
    const HOT_URL = "https://media.istockphoto.com/id/856939024/photo/cracked-earth-soil-sunset-landscape.jpg?s=612x612&w=0&k=20&c=vfN8kd1VcfpTA1FYBo-vU6JooVPJ1iGcZ8vLhxFifh8=";   
    const RAIN_URL = "https://media.istockphoto.com/id/105934727/photo/rain.jpg?s=612x612&w=0&k=20&c=rJcjz9o_7spWniAhZ-oFOVQ9gBJCy2tY_s__RqsseVw=";   

    return (
        <div className="InfoBox">
            <div className="cardContainer">
            <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image={
          info.humidity > 80
          ? RAIN_URL
          : info.temp > 15
          ? HOT_URL
          : COLD_URL
        }
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {info.city} {
          info.humidity > 80
          ? <ThunderstormIcon/>
          : info.temp > 15
          ? <WbSunnyIcon/>
          : <AcUnitIcon/>
        }
        </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
          <p>Tempreture = {info.temp}&deg;C</p>
          <p>Humidity = {info.humidity}</p>
          <p>Min Temp = {info.tempMin}&deg;C</p>
          <p>Max Temp = {info.temtMax}&deg;C</p>
          <p>
            The weather can be sescribed as <i>{info.weather}</i> and feels like {info.feelslike}&deg;C
          </p>
        </Typography>
      </CardContent>
    </Card>
    </div>
        </div>
    );
}