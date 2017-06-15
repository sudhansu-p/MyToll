package LocationManagement;

import static io.restassured.RestAssured.given;

import java.io.FileInputStream;
import java.io.IOException;
import java.util.Properties;
import java.util.concurrent.TimeUnit;
import org.testng.asserts.SoftAssert;
import Utility.*;
import cucumber.api.java.Before;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import io.restassured.RestAssured;
import io.restassured.response.Response;

public class Reference_LocationManagement {

	String URI;
	String SetSheetname;
	int RowNumVal;
	Response SerResp;
	static Properties Property = new Properties();
	static String RootFolder = System.getProperty("user.dir");

	@Before
	public static void StatupConfig() throws IOException {
		FileInputStream PropPath = new FileInputStream(
				System.getProperty("user.dir") + "\\src\\test\\java\\GenericRepository.properties");
		Property.load(PropPath);
		RestAssured.baseURI = Property.getProperty("Reference_Entrypoint");
		RestAssured.basePath = Property.getProperty("Reference_BasePath");

	}

	@Given("^A location management URI under sheet \"([^\"]*)\" from column \"([^\"]*)\" through (\\d+)$")
	public void a_location_management_URI_under_sheet_from_column_through(String Sheetname, int URIPath_Col, int RowNum)
			throws Throwable {
		RowNumVal = RowNum;
		SetSheetname = Sheetname;
		URI = Helper.getCellValue(RootFolder + Property.getProperty("JsonExcellSheet"), SetSheetname, RowNumVal,
				URIPath_Col);

	}

	@When("^I perform request from Column \"([^\"]*)\"$")
	public void Get_Request_Method(int ReqMethod) throws Throwable {

		String MethodName = Helper.getCellValue(RootFolder + Property.getProperty("JsonExcellSheet"), SetSheetname,
				RowNumVal, ReqMethod);

		if (MethodName.equalsIgnoreCase("Get")) {
			 try{
				 SerResp = given().log().all().get(URI);
			 }catch (Exception e){
				 
				 System.out.println("Unable to connect to Endpoint");
				 
			 }
			
			
		} else if (MethodName.equalsIgnoreCase("Post")) {
			SerResp = given().log().all().post(URI);
		}

	}

	@Then("^I verify the ResponseCode from column \"([^\"]*)\"$")
	public void i_verify_the_ResponseCode_from_column(int ResponseCode) throws Throwable {

		String RefRespCode = Helper.getCellValue(RootFolder + Property.getProperty("JsonExcellSheet"), SetSheetname,
				RowNumVal, ResponseCode);
		SerResp.then().assertThat().statusCode(Integer.parseInt(RefRespCode)).log().ifValidationFails();
	}

	@Then("^if ResponseCode is \"([^\"]*)\" then validate Context Type from column \"([^\"]*)\" and Response time from column \"([^\"]*)\"$")
	public void if_ResponseCode_is_then_validate_Context_Type_from_column_and_Response_time_from_column(
			int ValidateCode, int ContentType, int RespTime) throws Throwable {

		String Contenttype = Helper.getCellValue(RootFolder + Property.getProperty("JsonExcellSheet"), SetSheetname,
				RowNumVal, ContentType);
		String ResponseTime = Helper.getCellValue(RootFolder + Property.getProperty("JsonExcellSheet"), SetSheetname,
				RowNumVal, RespTime);
		SoftAssert validate = new SoftAssert();

		if (SerResp.getStatusCode() == ValidateCode) {

			validate.assertEquals(SerResp.getContentType(), "application/" + Contenttype + '"',
					"Content Type not Matched");
			validate.assertEquals(SerResp.getTimeIn(TimeUnit.SECONDS) <= Integer.parseInt(ResponseTime),
					"Exceed the Response Time");
			validate.assertAll();

		}

	}
/*
	@After
	public static void TearDown() throws IOException {

	}*/

}