require "circles"

-- Returns the distance between two points.
function math.dist(x1,y1, x2,y2) return ((x2-x1)^2+(y2-y1)^2)^0.5 end

function to_rgb(hex)
	_,_,r,g,b = hex:find('(%x%x)(%x%x)(%x%x)')
	print(r,g,b)
	color = {tonumber(r,16),tonumber(g,16),tonumber(b,16)}
	return color
end

function love.load()
	bg = love.graphics.newImage("background.png")

    colors = {to_rgb("#ff0000"),to_rgb("#ff0000"),to_rgb("#00ff00"),to_rgb("#0000ff"),to_rgb("#ffff00"),to_rgb("#00ffff"),to_rgb("#aa83f2"),to_rgb("#007AAA"),to_rgb("#F08584"),to_rgb("#BCAAAE"),}
    blend_modes = {"multiplicative", "additive", "subtractive"}
    for i=1, #circles do
    	circles[i]['color']    = to_rgb(circles[i]['color'])
    	circles[i]['dragging'] = { active = false, diffX = 0, diffY = 0 }
    	circles[i]['blend']	   = (circles[i]['blend'] == nil) and "additive" or circles[i]['blend']
    	--circles[i] = {x=xpos,y=ypos,r=i*5, color=colors[math.random(1,#colors)], dragging = { active = false, diffX = 0, diffY = 0 }, blend=blend_modes[math.random(1,#blend_modes)]}
    end

end

function love.draw()
    love.graphics.setLineStyle("smooth")

	love.graphics.setBlendMode("alpha") --Default blend mode
	love.graphics.setColor(255,255,255,255)
	love.graphics.draw(bg)

    for i=1, #circles do
        love.graphics.setColor(circles[i].color)
        love.graphics.setBlendMode(circles[i].blend)
        --love.graphics.setLineWidth(circles[i].r)
        love.graphics.circle("fill", circles[i].x, circles[i].y, circles[i].r)
        if circles[i]['stroke_size'] ~= nil then
        	love.graphics.setLineWidth(circles[i].stroke_size)
        	love.graphics.setColor(to_rgb(circles[i].stroke_color))
        	love.graphics.circle("line", circles[i].x, circles[i].y, circles[i].r)
        end
    end
end

function love.mousepressed(x, y, button)
  if button == "l" then
  	local to_drag = nil
  	for i=1, #circles do
  		if math.dist(x,y,circles[i].x,circles[i].y) <= circles[i].r then
  			to_drag = circles[i]
  		end
  	end
  	if to_drag ~= nil then
	  	to_drag.dragging.active = true
	    to_drag.dragging.diffX = x - to_drag.x
	    to_drag.dragging.diffY = y - to_drag.y
	end
  end
end

function love.update(dt)
	for i=1, #circles do
		if circles[i].dragging.active then
		    circles[i].x = love.mouse.getX() - circles[i].dragging.diffX
    		circles[i].y = love.mouse.getY() - circles[i].dragging.diffY
		end
	end
end

function love.mousereleased(x, y, button)

	for i=1, #circles do
  		if button == "l" then circles[i].dragging.active = false end
  	end
end