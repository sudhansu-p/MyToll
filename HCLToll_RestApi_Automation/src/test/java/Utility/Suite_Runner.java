package Utility;

import org.junit.runner.RunWith;
import com.github.mkolisnyk.cucumber.runner.ExtendedCucumberOptions;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)

@ExtendedCucumberOptions(
jsonReport = "CucumberOutput/cucumber.json",
retryCount = 3,
jsonUsageReport = "CucumberOutput/cucumber-usage.json",
outputFolder = "CucumberOutput")

@CucumberOptions(
plugin = { "html:CucumberOutput/cucumber-html-report",
        "json:CucumberOutput/cucumber.json", "pretty:CucumberOutput/cucumber-pretty.txt",
        "usage:CucumberOutput/cucumber-usage.json",
        "junit:CucumberOutput/cucumber-results.xml"
        },
glue = {"LocationManagement","Utility"},
features = {"Feature_Repository/"}

)

public class Suite_Runner {

}
