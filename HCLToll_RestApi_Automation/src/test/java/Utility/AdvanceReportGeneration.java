package Utility;



import org.junit.Test;

import com.github.mkolisnyk.cucumber.reporting.CucumberCoverageOverview;
import com.github.mkolisnyk.cucumber.reporting.CucumberDetailedResults;
import com.github.mkolisnyk.cucumber.reporting.CucumberResultsOverview;
import com.github.mkolisnyk.cucumber.reporting.CucumberUsageReporting;
import com.github.mkolisnyk.cucumber.reporting.CucumberFeatureOverview;


public class AdvanceReportGeneration {

	@Test
	public void AdvaceOverviewReport() throws Exception {
		CucumberResultsOverview results = new CucumberResultsOverview();
		results.setOutputDirectory("CucumberOutput");
		results.setOutputName("cucumber-results");
		results.setSourceFile("./CucumberOutput/cucumber.json");
		results.executeFeaturesOverviewReport();

	}

	@Test
	public void AdvanceUsageReport() throws Exception {
		CucumberUsageReporting report = new CucumberUsageReporting();
		report.setOutputDirectory("CucumberOutput");
		report.setJsonUsageFile("./CucumberOutput/cucumber-usage.json");
		report.executeReport();
	}

	@Test
	public void CucumberCoverageOverview() throws Exception {
		CucumberCoverageOverview results2 = new CucumberCoverageOverview();
		results2.setOutputDirectory("CucumberOutput");
		results2.setOutputName("cucumber-results");
		results2.setSourceFile("./CucumberOutput/cucumber.json");
		// results.setExcludeCoverageTags(new String[]{"@android"});
		// results.setIncludeCoverageTags(new String[]{"@ios"});
		results2.executeCoverageReport();
	}

	@Test
	public void CucumberDetailedResults() throws Exception {
		CucumberDetailedResults results = new CucumberDetailedResults();
		results.setOutputDirectory("CucumberOutput/");
		results.setOutputName("cucumber-results");
		results.setSourceFile("./CucumberOutput/cucumber.json");
		// results.setScreenShotLocation("../src/test/resources/");
		results.executeDetailedResultsReport(false, false);
	}

	@Test
	public void CucumberFeatureOverview() throws Exception {

		CucumberFeatureOverview results = new CucumberFeatureOverview();
		results.setOutputDirectory("CucumberOutput");
		results.setOutputName("cucumber-results");
		results.setSourceFile("./CucumberOutput/cucumber.json");
		results.executeFeatureOverviewChartReport();
	}

}
