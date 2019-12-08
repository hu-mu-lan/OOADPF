package Canvas;

public class requirement extends shape {

	public double top;
    public double left;
    protected String Description;

    public requirement(double top, double left, String description) {
        this.top = top;
        this.left = left;
        this.Description=description;
        canvas.addShape(this);
    }

    public void changePos(double top,double left) {
    	canvas.minusShape(this);
    	this.top = top;
    	this.left = left;
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
    public double getTop() {
        return this.top;
    }
    public double getLeft() {
        return this.left;
    }

}