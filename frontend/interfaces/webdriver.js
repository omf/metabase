
declare module "selenium-webdriver" {

    declare class WebDriver {
        getCurrentUrl(url: string): Promise<WebDriver>;
        wait(condition: Condition|Function, timeout: ?number): Promise<WebElement>;
        findElement(selector: By): WebElement;
        deleteAllCookies(): Promise<void>;
        getCurrentUrl(): Promise<string>;
    }

    declare class WebElement {
        click(): Promise<void>;
        findElement(selector: By): WebElement;
        getText(): Promise<string>;
        sendKeys(keys: string): Promise<void>;
        clear(): Promise<void>;
        getAttribute(attribute: string): Promise<string>;
    }

    declare class Condition {
    }

    declare class By {
        static css(selector: string): By;
        static xpath(selector: string): By;
    }

    declare class until {
        static elementLocated(selector: By): Condition;
    }
}
