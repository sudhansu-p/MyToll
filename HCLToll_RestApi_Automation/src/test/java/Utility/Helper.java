package Utility;

import java.io.FileInputStream;
import java.io.IOException;
import java.text.SimpleDateFormat;

import org.apache.poi.hssf.usermodel.HSSFSheet;
import org.apache.poi.hssf.usermodel.HSSFWorkbook;
import org.apache.poi.openxml4j.exceptions.InvalidFormatException;
import org.apache.poi.ss.usermodel.Cell;
import org.apache.poi.ss.usermodel.Workbook;
import org.apache.poi.ss.usermodel.WorkbookFactory;

import io.restassured.RestAssured;
import java.util.Date;
public class Helper {

	
	public static String getCellValue(String input_file_path_xls, String sheet_name, int row_Num, int row_cell_Num) throws InvalidFormatException, IOException{
	    FileInputStream fileInputStream = new FileInputStream(input_file_path_xls);
	    Workbook wb = WorkbookFactory.create(fileInputStream);
	    int type = wb.getSheet(sheet_name).getRow(row_Num).getCell(row_cell_Num).getCellType();
	    String Cell_value="";
	    if(type==Cell.CELL_TYPE_STRING){
	        Cell_value = wb.getSheet(sheet_name).getRow(row_Num).getCell(row_cell_Num).getStringCellValue(); 
	        //System.out.println("string:"+Cell_value);
	       
	    }else if(type==Cell.CELL_TYPE_NUMERIC){
	        int Cell_num_Value = (int) wb.getSheet(sheet_name).getRow(row_Num).getCell(row_cell_Num).getNumericCellValue();
	        Cell_value = ""+Cell_num_Value;
	        //System.out.println("Num:"+Cell_value);
	    }
	    else if(type==Cell.CELL_TYPE_BLANK){
	        Cell_value = wb.getSheet(sheet_name).getRow(row_Num).getCell(row_cell_Num).getStringCellValue(); 
	        System.out.println("Blank cell");
	    }
	    
	    return Cell_value;
	}
	
	
	public static  int get_sheet_name_index(String input_file_path, String sheet_name) throws Exception{
		   
	    FileInputStream fileInputStream = new FileInputStream(input_file_path);
	    HSSFWorkbook workbook = new HSSFWorkbook(fileInputStream);
	    int sheet_index = workbook.getSheetIndex(sheet_name);
	    return sheet_index;
	   
	}
	
	public static  int get_sheet_row_count(String input_file_path, String sheet_name) throws Exception{
	    
	    FileInputStream fileInputStream = new FileInputStream(input_file_path);
	    HSSFWorkbook workbook = new HSSFWorkbook(fileInputStream);
	    HSSFSheet worksheet = workbook.getSheet(sheet_name);
	    int lst_rw=worksheet.getLastRowNum();
	    return lst_rw;
	    
	}
	
	public static void setup() {
        String port = System.getProperty("server.port");
        if (port == null) {
            RestAssured.port = Integer.valueOf(8080);
        }
        else{
            RestAssured.port = Integer.valueOf(port);
        }


        String basePath = System.getProperty("server.base");
        if(basePath==null){
            basePath = "/rest-garage-sample/";
        }
        RestAssured.basePath = basePath;

        String baseHost = System.getProperty("server.host");
        if(baseHost==null){
            baseHost = "http://localhost";
        }
        RestAssured.baseURI = baseHost;

    }
	

	  public static String getCurrentDateStamp()
	  {
	    SimpleDateFormat sdfDate = new SimpleDateFormat("MM-dd-yy");
	    Date now = new Date();
	    String strDate = sdfDate.format(now);
	    return strDate;
	  }

	  public static String getCurrentTimeStamp()
	  {
	    SimpleDateFormat sdfDate = new SimpleDateFormat("hh_mm_ss");
	    Date now = new Date();
	    String strDate = sdfDate.format(now);
	    return strDate;
	  }
}
