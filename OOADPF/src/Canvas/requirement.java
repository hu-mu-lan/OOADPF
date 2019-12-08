package Canvas;

public class requirement extends shape {

	protected double width;
    protected double height;
    protected String Description;

    public requirement(double w, double h,String description) {
        this.width = w;
        this.height = h;
        this.Description=description;
        canvas.addShape(this);
    }

    public void changePos(double width,double height) {
    	canvas.minusShape(this);
    	this.width=width;
    	this.height=height;
    	canvas.addShape(this);
    }
    
    public void editInfo(String description){
		canvas.minusShape(this);
        this.Description=description;
		canvas.addShape(this);
	}
    
    public String getDescription() {
    	return this.Description;
    }
    public double getWidth() {
        return this.width;
    }
    public double getHeight() {
        return this.height;
    }

}