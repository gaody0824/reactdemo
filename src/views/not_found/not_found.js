import React from 'react'
import './not_found.less'
import {Link} from "react-router-dom";

function makeSnow(el) {
    let ctx = el.getContext('2d');
    let width = 0;
    let height = 0;
    let particles = [];

    let Particle = function() {
        this.x = this.y = this.dx = this.dy = 0;
        this.reset();
    }

    Particle.prototype.reset = function() {
        this.y = Math.random() * height;
        this.x = Math.random() * width;
        this.dx = Math.random() - 0.5;
        this.dy = (Math.random() * 0.5) + 0.5;
    }

    function createParticles(count) {
        if (count !== particles.length) {
            particles = [];
            for (let i = 0; i < count; i++) {
                particles.push(new Particle());
            }
        }
    }

    function onResize() {
        width = window.innerWidth;
        height = window.innerHeight;
        el.width = width;
        el.height = height;

        createParticles((width * height) / 10000);
    }

    function updateParticles() {
        ctx.clearRect(0, 0, width, height);
        ctx.fillStyle = '#f6f9fa';

        particles.forEach(function(particle) {
            particle.y += particle.dy;
            particle.x += particle.dx;

            if (particle.y > height) {
                particle.y = 0;
            }

            if (particle.x > width) {
                particle.reset();
                particle.y = 0;
            }

            ctx.beginPath();
            ctx.arc(particle.x, particle.y, 5, 0, Math.PI * 2, false);
            ctx.fill();
        });

        window.requestAnimationFrame(updateParticles);
    }

    onResize();
    updateParticles();
}

class NotFound extends React.Component {
    // 组件渲染后调用
    componentDidMount(){
        let canvas = document.getElementById('snow');
        makeSnow(canvas);
    }

    render() {
        return (
            <div className="not_found_background">
                <div className="content">
                    <canvas className="snow" id="snow" width="1920" height="917"></canvas>
                    <div className="main-text">
                        <h1>UH OH!</h1>
                        <h4>页面在雪地里失踪了</h4>
                        <div className="main-text-a">
                            <Link to="/Page1" style={{color:'black'}}>
                                <div style={{color: '#1ba1e2'}}> >> 返回首页</div>
                            </Link>
                        </div>
                    </div>
                    <div className="ground">
                        <div className="mound">
                            <div className="mound_text">404</div>
                            <div className="mound_spade"></div>
                        </div>
                    </div>
                </div>
            </div>
        );
    };

}

export default NotFound;