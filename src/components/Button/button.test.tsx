import { render, screen, fireEvent } from "@testing-library/react";
import Button, { ButtonProps, ButtonSize, ButtonType } from "./button";

const defaultProps = {
  // 该方法可以在jset中用来监听方法是否有被调用到
  onClick: jest.fn(),
};

const testProps: ButtonProps = {
  btnType: ButtonType.Danger,
  size: ButtonSize.Large,
  className: "andy",
};

const disabeldProps: ButtonProps = {
  disabled: true,
  onClick: jest.fn(),
};

test("button test", () => {
  render(<Button>Nice</Button>);
  const element = screen.getByText("Nice");
  expect(element).toBeTruthy();
  expect(element).toBeInTheDocument();
});

describe("test buttom component", () => {
  it("should render the correct default button", () => {
    render(<Button {...defaultProps}>Nice</Button>);
    const element = screen.getByText("Nice");
    expect(element).toBeTruthy();
    expect(element).toBeInTheDocument();
    expect(element.tagName).toEqual("BUTTON");
    expect(element).toHaveClass("btn btn-default");
    fireEvent.click(element);
    expect(defaultProps.onClick).toHaveBeenCalled();
  });

  it("should render the correct component base on different props", () => {
    render(<Button {...testProps}>Nice</Button>);
    const element = screen.getByText("Nice");
    expect(element).toBeInTheDocument();
    expect(element).toHaveClass("btn btn-danger andy btn-large");
  });

  it("should render a link when btnType equals link and href is provide", () => {
    render(
      <Button href="www.dumyhref" btnType={ButtonType.Link}>
        Link
      </Button>
    );
    const element = screen.getByText("Link");
    expect(element).toBeInTheDocument();
    expect(element.tagName).toEqual("A");
    expect(element).toHaveClass("btn btn-link");
  });

  it("should render a disabled button when disabled set to be true", () => {
    render(
      <Button {...disabeldProps}>
        Disabled
      </Button>
    );
    const element = screen.getByText("Disabled") as HTMLButtonElement;
    expect(element).toBeInTheDocument();
    expect(element.disabled).toBeTruthy();
    fireEvent.click(element);
    expect(disabeldProps.onClick).not.toHaveBeenCalled();
  });
});
