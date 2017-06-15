package Utility;

import static io.restassured.RestAssured.given;

import java.io.FileInputStream;
import java.io.IOException;
import java.util.Properties;

import com.aventstack.extentreports.ExtentReports;
import com.aventstack.extentreports.ExtentTest;
import com.aventstack.extentreports.GherkinKeyword;
import com.aventstack.extentreports.Status;
import com.aventstack.extentreports.reporter.ExtentHtmlReporter;

import cucumber.api.java.After;
import cucumber.api.java.Before;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import io.restassured.http.ContentType;
import io.restassured.response.Response;
import io.restassured.specification.RequestSpecification;

public class SampleRun {

	public static String baseURI;
	public Response ResP;
	public static ExtentTest test;
	static ExtentHtmlReporter htmlReporter;
	static String RootFolder = System.getProperty("user.dir");
	static Properties Property = new Properties();
	String URI;
	RequestSpecification Rsp;


	@Before
	public static void StatupConfig() throws IOException {
		FileInputStream PropPath = new FileInputStream(
				System.getProperty("user.dir") + "\\src\\test\\java\\GenericRepository.properties");
		Property.load(PropPath);

	}

	@Given("^URI is \"([^\"]*)\"$")
	public void uri_is(String Endpoint) throws Throwable {

		URI = Endpoint;

	}

	@When("^Perform GET request$")
	public void perform_GET_request() throws Throwable {

		ResP = given().get(URI);
		
		//Extst.log(Status.INFO, "Made GET Request with " + ResP.print());
	}

	@Then("^Validate response \"([^\"]*)\"$")
	public void validate_response(String ResponseCode) throws Throwable {

		ResP.then().assertThat().statusCode(200).log().ifValidationFails();
		
	}

	@When("^Perform POST request$")
	public void perform_POST_request() throws Throwable {
		
		ResP = Rsp.post(URI);
	}

	@Then("^Use sheet \"([^\"]*)\" and (\\d+) and (\\d+)$")
	public void use_sheet_and_and(String Sheet, int Row, int Column) throws Throwable {

		String cellvalJson = Helper.getCellValue(RootFolder + Property.getProperty("JsonExcellSheet"), Sheet, Row,
				Column);

		Rsp = given().contentType(ContentType.JSON).and().body(cellvalJson).log().all();
	}

	@Then("^verify the (\\d+)$")
	public void verify_the(int ResponseCode) throws Throwable {

		
		ResP.then().assertThat().statusCode(ResponseCode).log().all();

	}

	

}
