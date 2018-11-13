package controllers


import javax.inject.Inject

//import models.City
import play.api.mvc._
import play.modules.reactivemongo._
import reactivemongo.api.ReadPreference
import play.api.libs.json._
import reactivemongo.play.json._
import reactivemongo.play.json.collection._
import reactivemongo.api.Cursor

import scala.concurrent.{ExecutionContext, Future}

class ActivityLogController @Inject()(cc: ControllerComponents)(val reactiveMongoApi: ReactiveMongoApi)(implicit exec: ExecutionContext) extends AbstractController(cc) with MongoController with ReactiveMongoComponents {

	def activityLogsFuture: Future[JSONCollection] = database.map(_.collection[JSONCollection]("city"))

	def index = Action.async {
		val futureCitiesList: Future[List[JsObject]] = activityLogsFuture.flatMap {
			// find all cities with name `name`
			_.find(Json.obj()).
			  // perform the query and get a cursor of JsObject
			  cursor[JsObject](ReadPreference.primary).
			  // Coollect the results as a list
			  collect[List](100, Cursor.FailOnError())
		}
		// everything's ok! Let's reply with a JsValue
		futureCitiesList.map { cities =>
			Ok(Json.toJson(cities))
		}
	}
}
