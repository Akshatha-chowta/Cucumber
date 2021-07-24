package StepDefinition;

import org.junit.runner.RunWith;

import io.cucumber.junit.Cucumber;
import io.cucumber.junit.CucumberOptions;

@RunWith(Cucumber.class)
@CucumberOptions(
		monochrome=true,
		plugin={"pretty","html:target/cucumberss-html"},
		features="src/test/java/features",
		tags= {"@DataTable"},
		glue= {"StepDefinition"}
		
		
		)
public class TestRunner {

}