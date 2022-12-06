import routes from "./routes";
import renderRoutes from './renderRoutes'
import { useRoutes } from "react-router-dom";
import { Suspense } from 'react'
import Fallback from "../components/fallback/index";

const Router = () => {
  return (
    <Suspense fallback={<Fallback />}>
      {useRoutes(renderRoutes(routes))}
    </Suspense>
  )
}

export default Router