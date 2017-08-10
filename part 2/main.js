var world;
    function init() {
        const   b2Vec2 = Box2D.Common.Math.b2Vec2;// 2維向量
        const   b2BodyDef = Box2D.Dynamics.b2BodyDef;// 物體定義
        const   b2Body = Box2D.Dynamics.b2Body;//物體
        const   b2FixtureDef = Box2D.Dynamics.b2FixtureDef;//物體邊緣碰撞器定義
        const   b2Fixture = Box2D.Dynamics.b2Fixture;//物體邊緣碰撞
        const   b2World = Box2D.Dynamics.b2World;//世界
        const   b2MassData = Box2D.Collision.Shapes.b2MassData;//質量
        const   b2PolygonShape = Box2D.Collision.Shapes.b2PolygonShape;//多邊形
        const   b2CircleShape = Box2D.Collision.Shapes.b2CircleShape;//圓形
        const   b2DebugDraw = Box2D.Dynamics.b2DebugDraw;//邊緣

        world = new b2World(new b2Vec2(0, 10),true);//重力 ，睡眠

        let fixDef = new b2FixtureDef;
        fixDef.density = 1.0;//密度
        fixDef.friction = 0.5;//摩擦力
        fixDef.restitution = 0.2;//彈力

        const STATIC_BODY = b2Body.b2_staticBody;
        const DYNAMIC_BODY = b2Body.b2_dynamicBody;
        const KINEMATIC_BODY = b2Body.b2_kinematicBody;


        let CreateGroundObject = function (type,x,y,width,height) {
            var bodyDef = new b2BodyDef;
            bodyDef.type = type;
            bodyDef.position.x = x ;//30px=1unit
            bodyDef.position.y = y ;
            fixDef.shape = new b2PolygonShape;
            fixDef.shape.SetAsBox(width, height);
            var body = world.CreateBody(bodyDef);
            body.CreateFixture(fixDef);//create some objects
            return body;

            
        };
        let upup = function () {
            ground1.SetLinearVelocity(new b2Vec2(0,-5));
            if(ground1.GetPosition().y < 0)
                ground1.SetPosition(new b2Vec2((Math.random()*100)%16+2,18));
            ground2.SetPosition(new b2Vec2(Math.random()%16+2,18));
            if(ground2.GetPosition().y < 0)
                ground2.SetPosition(new b2Vec2((Math.random()*100)%16+2,18));
            ground3.SetLinearVelocity(new b2Vec2(0,-5));
            if(ground3.GetPosition().y < 0)
                ground3.SetPosition(new b2Vec2((Math.random()*100)%16+2,18));
            ground4.SetLinearVelocity(new b2Vec2(0,-5));
            if(ground4.GetPosition().y < 0)
                ground4.SetPosition(new b2Vec2((Math.random()*100)%16+2,18));
            ground5.SetLinearVelocity(new b2Vec2(0,-5));
            if(ground5.GetPosition().y < 0)
                ground5.SetPosition(new b2Vec2((Math.random()*100)%16+2,18));
            ground6.SetLinearVelocity(new b2Vec2(0,-5));
            if(ground6.GetPosition().y < 0)
                ground6.SetPosition(new b2Vec2((Math.random()*100)%16+2,18));
            ground7.SetLinearVelocity(new b2Vec2(0,-5));
            if(ground7.GetPosition().y < 0)
                ground7.SetPosition(new b2Vec2((Math.random()*100)%16+2,18));
        }
        CreateGroundObject  (STATIC_BODY,0,17,0.2,100);
        CreateGroundObject  (STATIC_BODY,20,17,0.2,100);
        var ground1 = new CreateGroundObject  (KINEMATIC_BODY,(Math.random()*100)%16+2,17,1.8,0.2);
        var ground2 = new CreateGroundObject  (KINEMATIC_BODY,(Math.random()*100)%16+2,20,1.8,0.2);
        var ground3 = new CreateGroundObject  (KINEMATIC_BODY,(Math.random()*100)%16+2,23,1.8,0.2);
        var ground4 = new CreateGroundObject  (KINEMATIC_BODY,(Math.random()*100)%16+2,26,1.8,0.2);
        var ground5 = new CreateGroundObject  (KINEMATIC_BODY,(Math.random()*100)%16+2,29,1.8,0.2);
        var ground6 = new CreateGroundObject  (KINEMATIC_BODY,(Math.random()*100)%16+2,32,1.8,0.2);
        var ground7 = new CreateGroundObject  (KINEMATIC_BODY,(Math.random()*100)%16+2,35,1.8,0.2);

        var player = new CreateGroundObject(DYNAMIC_BODY,1,0,0.5,0.5);
        window.setInterval(upup,1/10,10,10);

        const SPEED = 10;

        window.onkeydown = function () {
            console.log(player);
            player.SetAwake(true);
            switch (event.keyCode){
                case 37://L
                    player.SetLinearVelocity(new b2Vec2(-10,6));
                    break;
                case 39://R
                    player.SetLinearVelocity(new b2Vec2(10,6));
                    break;

            }

            
        };
        let debugDraw = new b2DebugDraw();
        debugDraw.SetSprite(document.getElementById("canvas").getContext("2d"));
        debugDraw.SetDrawScale(30.0);
        debugDraw.SetFillAlpha(0.3);
        debugDraw.SetLineThickness(1.0);
        debugDraw.SetFlags(b2DebugDraw.e_shapeBit | b2DebugDraw.e_jointBit);
        world.SetDebugDraw(debugDraw);
        window.setInterval(update, 1000 / 60);
    };
    function update(){
        world.Step(1 / 60,10,10);
        world.DrawDebugData();
        world.ClearForces();
    };
