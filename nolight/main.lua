vector = require "hump.vector"

function love.load( )
    love.graphics.setBackgroundColor(255,255,153)
    colors = {{131,179,107},{179,179,107}}
    boxes = {}
    xpos = 0
    ypos = 20
    for i=1,15 do
       xpos = xpos + i*5 + 15
       ypos = ypos + 15
       boxes[i] = {x=xpos,y=ypos,w=i*5,h=i*5, color=colors[math.random(1,#colors)]}
    end
    boxes[1] = {x=150,y=300,w=80,h=80, color=colors[math.random(1,#colors)]} 
    lamp = { x=300, y=400, r=10, lr=120, d=90 }
    shadows ={}
    printed = false
    bg = love.graphics.newImage("images.jpg")

end

function line_shadow( light, vec1, vec2 )
    local v1n = vec1
    local v2n = vec2
    local normal = (v2n-v1n):perpendicular()
    local lv = vector.new(light.x,light.y)
    local dist = (v1n-lv)*50
    if normal*dist <= 0 then
        local res1 = dist + v1n

        dist = (v2n-lv)*50
        local res2 = dist + v2n

        return { vec1.x, vec1.y, res1.x, res1.y, res2.x, res2.y, vec2.x, vec2.y }
    else return false end
end

function printv(a) 
    print(a.x, a.y)
end

function shape_shadow( light, shape )
    local v1 = vector.new(shape.x,shape.y)
    local v2 = vector.new(shape.x+shape.w,shape.y)
    local v3 = vector.new(shape.x+shape.w,shape.y+shape.h)
    local v4 = vector.new(shape.x,shape.y+shape.h)
    local s1 = line_shadow(light, v1,v2)
    local s2 = line_shadow(light, v2,v3)
    local s3 = line_shadow(light, v3,v4)
    local s4 = line_shadow(light, v4,v1)
    local res = { s1,s2,s3,s4 }
    local ret = {}
    for i=1, #res do
        if res[i] ~= false then table.insert(ret,res[i]) end
    end

    return ret 
end

function love.update( dt )
   lamp.x = love.mouse.getX() 
   lamp.y = love.mouse.getY() - 20 
end

function love.draw( )
    love.graphics.setBlendMode("alpha")
    for i=1, #boxes do
        love.graphics.setColor(boxes[i].color[1],boxes[i].color[2],boxes[i].color[3])
        love.graphics.rectangle("fill", boxes[i].x, boxes[i].y, boxes[i].w, boxes[i].h)
        shadows[i] = shape_shadow(lamp,boxes[i])
    end
    for i=1, #shadows do
        for j=1, #shadows[i] do
            love.graphics.setColor(0,0,0,180)
            love.graphics.polygon("fill", shadows[i][j])
        end
    end
    love.graphics.setColor(255,215,0)
    love.graphics.circle("fill", lamp.x, lamp.y, lamp.r, 50)
end